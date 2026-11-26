"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type ContactEvent =
  | "click_call"
  | "click_line"
  | "click_facebook"
  | "click_email"
  | "click_booking";

function classify(url: string): ContactEvent | null {
  const u = url.toLowerCase();
  if (u.startsWith("tel:")) return "click_call";
  if (u.startsWith("mailto:")) return "click_email";
  if (u.includes("lin.ee") || u.includes("line.me")) return "click_line";
  if (u.includes("facebook.com") || u.includes("m.me/") || u.includes("messenger.com")) return "click_facebook";
  if (u.includes("ipms247.com")) return "click_booking";
  return null;
}

// Send only to the hotel's own GA4 property, never to other Google tags
// that may be on the page (e.g. an agency's container).
export const GA4_ID = "G-C2HQGGX33G";

export function trackContact(event: ContactEvent, linkUrl: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, { link_url: linkUrl, send_to: GA4_ID });
}

/**
 * Sends a GA4 event whenever a visitor clicks a call / LINE / Facebook /
 * email / booking link anywhere on the page. These events are marked as
 * key events in GA4 and imported into Google Ads as conversions.
 */
export default function ConversionTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const event = classify(href);
      if (event) trackContact(event, href);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
