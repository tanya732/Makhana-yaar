// wa.me requires an international number using digits only.
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '918802248503'

export function getWhatsAppUrl(message) {
  const phoneNumber = WHATSAPP_NUMBER.replace(/\D/g, '')
  if (!phoneNumber) return null
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}
