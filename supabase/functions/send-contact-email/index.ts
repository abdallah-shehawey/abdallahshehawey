import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // Honeypot field - should be empty for real users
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // 5 requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  record.count++;
  return false;
}

// HTML escape function to prevent injection attacks
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Check for suspicious patterns
function hasSuspiciousContent(input: string): boolean {
  const suspiciousPatterns = /<script|<iframe|javascript:|onerror=|onload=|onclick=|onmouseover=/i;
  return suspiciousPatterns.test(input);
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    // Check rate limit
    if (isRateLimited(clientIp)) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, subject, message, website }: ContactEmailRequest = await req.json();

    // Honeypot check - if website field is filled, it's a bot
    // Return success to avoid revealing the bot detection
    if (website && website.trim() !== "") {
      console.warn("Honeypot triggered from IP:", clientIp);
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate field lengths
    if (name.length > 100 || email.length > 255 || subject.length > 200 || message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Field length exceeds maximum allowed" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Check for suspicious content (potential XSS/injection attempts)
    if (hasSuspiciousContent(name) || hasSuspiciousContent(subject) || hasSuspiciousContent(message)) {
      console.warn("Suspicious content detected from IP:", clientIp);
      return new Response(
        JSON.stringify({ error: "Invalid input detected" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Escape all user inputs for safe HTML embedding
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // Send notification email to site owner
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["shehawey9@gmail.com"],
      subject: `New Contact Form Submission: ${safeSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">New Contact Form Message</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; color: #4b5563;">${safeMessage}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      reply_to: email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    // Log detailed error server-side for debugging
    console.error("Error in send-contact-email function:", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });
    
    // Return generic error message to client (prevent information leakage)
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
