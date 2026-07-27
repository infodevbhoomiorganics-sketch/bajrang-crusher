export const PHONE = "+919736000077";
export const DISPLAY_PHONE = "+91 97360 00077";
export const ADDRESS = "22MQ+GM3, Kandaghat, Himachal Pradesh 173222";
export const COMPANY = "Bajrang Stone Crusher & Bajrang Constructions";

export function waLink(message: string): string {
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(waLink(message), "_blank", "noopener,noreferrer");
}

export const defaultQuoteMessage = `Hello Bajrang Stone Crusher,

Name:
Phone:
Material:
Quantity:
Delivery Location:

Please send quotation.`;
