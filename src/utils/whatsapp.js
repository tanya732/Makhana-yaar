// wa.me requires an international number using digits only.
const WHATSAPP_NUMBER = import.meta.env.VITE_CONTACT_PHONE || ''

export function getWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
