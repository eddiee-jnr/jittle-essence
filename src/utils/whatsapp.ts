
export const STORE_WHATSAPP_PHONE = '233200000000';

export interface OrderableProduct {
  name: string;
  brand?: string;
  size?: string;
  concentration?: string;
  priceGHS: number;
}

/**
 * Generates a pre-filled direct WhatsApp purchase link for an individual fragrance.
 */
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

  return `https://wa.me/${STORE_WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a pre-filled direct WhatsApp concierge inquiry link.
 */
export function getWhatsAppInquiryUrl(customMessage?: string): string {
  const defaultText =
    customMessage ||
    `Hello Jittle Essence, I would like to inquire about your authentic fragrances and today's available stock catalogue.`;

  return `https://wa.me/${STORE_WHATSAPP_PHONE}?text=${encodeURIComponent(defaultText)}`;
}
