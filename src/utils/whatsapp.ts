
export const STORE_WHATSAPP_PHONE = '+233 54 580 6882';

export interface OrderableProduct {
  name: string;
  brand?: string;
  size?: string;
  concentration?: string;
  priceGHS: number;
}

/**pre-filled direct WhatsApp purchase link for an individual fragrance.*/
export function getWhatsAppOrderUrl(product: OrderableProduct): string {
  const sizeSpec =
    product.size && product.concentration
      ? `(${product.size} · ${product.concentration})`
      : product.size
        ? `(${product.size})`
        : '';

  const message = [
    `Hello Jittle Essence, I would like to order:`,
    `-${product.name} ${sizeSpec}`.trim(),
    `- Price: GH₵ ${product.priceGHS.toLocaleString()}`,
    ``,
    `Please confirm availability and delivery timeframe to my location.`,
  ].join('\n');

  const cleanPhone = STORE_WHATSAPP_PHONE.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/** a pre-filled direct WhatsApp concierge inquiry link. */
export function getWhatsAppInquiryUrl(customMessage?: string): string {
  const defaultText =
    customMessage ||
    `Hello Jittle Essence, I would like to inquire about your fragrances and today's available stocks.`;

  const cleanPhone = STORE_WHATSAPP_PHONE.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultText)}`;
}
