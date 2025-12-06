// EmailJS Configuration
// These are public keys safe for client-side use
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your Service ID
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your Template ID
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Replace with your Public Key
};
