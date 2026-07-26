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

// Brand palette, mirrored from the site theme in src/index.css
const BRAND = {
  page: "#0a0c10",
  surface: "#14171f",
  surfaceAlt: "#1a1e28",
  border: "#232936",
  text: "#e8ecf2",
  muted: "#8a97ab",
  primary: "#22d3d3",
  accent: "#2eb873",
  onPrimary: "#0a0c10",
};

const SANS = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const MONO = "'JetBrains Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace";

// Keep header fields single-line (defence in depth against header injection)
function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function toPlainSnippet(value: string, max: number): string {
  const flat = value.replace(/\s+/g, " ").trim();
  return flat.length > max ? `${flat.slice(0, max - 1)}…` : flat;
}

interface EmailContent {
  name: string;
  email: string;
  subject: string;
  message: string;
  sentAt: Date;
}

// Modern dark template: table-based + fully inline styles so it renders
// consistently in Gmail (web, iOS, Android), Apple Mail and Outlook.
function renderContactEmailHtml({ name, email, subject, message, sentAt }: EmailContent): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\r\n|\r|\n/g, "<br />");
  const initial = escapeHtml(name.trim().charAt(0).toUpperCase() || "?");
  const preheader = escapeHtml(toPlainSnippet(`${subject} — ${message}`, 120));
  const replyHref = `mailto:${safeEmail}?subject=${encodeURIComponent(`Re: ${sanitizeHeader(subject)}`)}`;
  const timestamp = `${sentAt.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    hour12: false,
  })} UTC`;

  const metaRow = (label: string, value: string) => `
              <tr>
                <td style="padding: 0 0 14px 0; font-family: ${MONO}; font-size: 11px; line-height: 16px; letter-spacing: 1px; text-transform: uppercase; color: ${BRAND.muted}; white-space: nowrap; vertical-align: top; width: 88px;">${label}</td>
                <td style="padding: 0 0 14px 0; font-family: ${SANS}; font-size: 15px; line-height: 22px; color: ${BRAND.text}; vertical-align: top; word-break: break-word;">${value}</td>
              </tr>`;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>New portfolio message</title>
</head>
<body style="margin: 0; padding: 0; width: 100%; background-color: ${BRAND.page}; -webkit-font-smoothing: antialiased;">
  <div style="display: none; max-height: 0; overflow: hidden; opacity: 0; font-size: 1px; line-height: 1px; color: ${BRAND.page};">${preheader}&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: ${BRAND.page};">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px; background-color: ${BRAND.surface}; border: 1px solid ${BRAND.border}; border-radius: 16px; overflow: hidden;">

          <!-- Accent hairline -->
          <tr>
            <td height="3" style="height: 3px; line-height: 3px; font-size: 0; background-color: ${BRAND.primary}; background-image: linear-gradient(90deg, ${BRAND.primary} 0%, ${BRAND.accent} 100%);">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 28px 32px 20px 32px;">
              <p style="margin: 0 0 10px 0; font-family: ${MONO}; font-size: 11px; line-height: 16px; letter-spacing: 2px; text-transform: uppercase; color: ${BRAND.primary};">&#9670;&nbsp; New message</p>
              <h1 style="margin: 0; font-family: ${MONO}; font-size: 22px; line-height: 30px; font-weight: 700; color: ${BRAND.text};">Portfolio contact form</h1>
            </td>
          </tr>

          <!-- Sender card -->
          <tr>
            <td style="padding: 0 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: ${BRAND.surfaceAlt}; border: 1px solid ${BRAND.border}; border-radius: 12px;">
                <tr>
                  <td style="padding: 20px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="44" style="width: 44px; height: 44px; background-color: ${BRAND.primary}; border-radius: 22px; text-align: center; font-family: ${MONO}; font-size: 18px; font-weight: 700; color: ${BRAND.onPrimary};">${initial}</td>
                        <td style="padding-left: 14px;">
                          <p style="margin: 0; font-family: ${SANS}; font-size: 16px; line-height: 22px; font-weight: 600; color: ${BRAND.text};">${safeName}</p>
                          <a href="mailto:${safeEmail}" style="font-family: ${MONO}; font-size: 13px; line-height: 20px; color: ${BRAND.primary}; text-decoration: none; word-break: break-all;">${safeEmail}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Meta -->
          <tr>
            <td style="padding: 24px 32px 0 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
${metaRow("Subject", `<strong style="font-weight: 600;">${safeSubject}</strong>`)}
${metaRow("Received", timestamp)}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 4px 32px 0 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: ${BRAND.surfaceAlt}; border: 1px solid ${BRAND.border}; border-left: 3px solid ${BRAND.accent}; border-radius: 12px;">
                <tr>
                  <td style="padding: 20px 22px;">
                    <p style="margin: 0 0 12px 0; font-family: ${MONO}; font-size: 11px; line-height: 16px; letter-spacing: 1px; text-transform: uppercase; color: ${BRAND.muted};">Message</p>
                    <p style="margin: 0; font-family: ${SANS}; font-size: 15px; line-height: 24px; color: ${BRAND.text};">${safeMessage}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding: 26px 32px 30px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" bgcolor="${BRAND.primary}" style="background-color: ${BRAND.primary}; border-radius: 10px;">
                    <a href="${replyHref}" style="display: inline-block; padding: 13px 26px; font-family: ${MONO}; font-size: 14px; font-weight: 700; line-height: 20px; color: ${BRAND.onPrimary}; text-decoration: none; border-radius: 10px;">Reply to ${safeName} &#8594;</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px 26px 32px; border-top: 1px solid ${BRAND.border};">
              <p style="margin: 0; font-family: ${MONO}; font-size: 11px; line-height: 18px; color: ${BRAND.muted};">Sent from the contact form on abdallahshehawey.vercel.app</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// Plain-text alternative — improves deliverability and covers text-only clients
function renderContactEmailText({ name, email, subject, message, sentAt }: EmailContent): string {
  return [
    "NEW MESSAGE — PORTFOLIO CONTACT FORM",
    "====================================",
    "",
    `From:     ${name} <${email}>`,
    `Subject:  ${subject}`,
    `Received: ${sentAt.toISOString()}`,
    "",
    "Message",
    "-------",
    message,
    "",
    "------------------------------------",
    `Reply directly to this email to reach ${name}.`,
  ].join("\n");
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

    // Escaping happens inside the template renderer
    const content: EmailContent = { name, email, subject, message, sentAt: new Date() };

    // Send notification email to site owner
    const emailResponse = await resend.emails.send({
      // Fixed sender name: keeps the mail filterable and avoids letting a
      // submitter spoof a display name in the inbox list
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["shehawey9@gmail.com"],
      subject: `New message · ${sanitizeHeader(subject)}`,
      html: renderContactEmailHtml(content),
      text: renderContactEmailText(content),
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
