// ============================================
// INVERTECH CLIMA — Analytics Utilities
// ============================================

type EventParams = {
  cta_location?: string;
  cta_text?: string;
  page_section?: string;
  scroll_depth?: number;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Push event to Google Tag Manager dataLayer
 */
export function trackEvent(eventName: string, params?: EventParams): void {
  if (typeof window === "undefined") return;

  const deviceType = window.innerWidth < 768 ? "mobile" : "desktop";

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
    device_type: deviceType,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track CTA click events
 */
export function trackCtaClick(
  ctaType: "whatsapp" | "phone",
  location: string,
  ctaText: string
): void {
  trackEvent(`cta_${ctaType}_click`, {
    cta_location: location,
    cta_text: ctaText,
  });
}

/**
 * Track scroll depth events
 */
export function trackScrollDepth(depth: number): void {
  trackEvent(`scroll_${depth}`, {
    scroll_depth: depth,
  });
}

/**
 * Track section view events
 */
export function trackSectionView(sectionId: string): void {
  trackEvent("section_view", {
    page_section: sectionId,
  });
}
