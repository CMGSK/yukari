/**
 * This does not eliminate tracking, but makes twitter links
 * to use a domain that allows embedded videos in certain applications
 * instead.
 */

import type { UrlCleaner } from "./manager";

export const twitter: UrlCleaner = {
  matches(url: URL): boolean {
    return url.hostname.toLowerCase() === "x.com";
  },

  clean(url: URL): URL {
    url.hostname = "fxtwitter.com";
    return url;
  },
} satisfies UrlCleaner;
