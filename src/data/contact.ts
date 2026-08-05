/** Contact details shared by the hero, contact page and footer. */

/** International format, digits only — the shape wa.me expects. */
export const WHATSAPP_NUMBER = "201501899476";

/** Human-readable version of the same number. */
export const WHATSAPP_DISPLAY = "+20 150 189 9476";

/** Opens a WhatsApp chat with a prefilled greeting. */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Abdallah, I came across your portfolio and wanted to reach out."
)}`;
