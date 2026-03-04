"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE, NAV_LINKS, BANNER, AIRBNB_LISTING_URL } from "@/content/site";
import { Button } from "./Button";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-northwoods-sand">
      {BANNER.enabled && (
        <div className="bg-northwoods-pine text-white text-center py-2 px-4 text-sm">
          {BANNER.text}
        </div>
      )}
      <nav className="max-w-6xl mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl text-northwoods-bark hover:text-northwoods-pine transition-colors"
          >
            {SITE.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-northwoods-pine"
                    : "text-northwoods-bark hover:text-northwoods-pine"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={AIRBNB_LISTING_URL}
              external
              variant="primary"
              className="!py-2 !px-4 text-sm"
            >
              Book on Airbnb
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-northwoods-bark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden ${mobileOpen ? "block" : "hidden"} mt-4 pb-4`}
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2 font-medium ${
                  pathname === link.href
                    ? "text-northwoods-pine"
                    : "text-northwoods-bark"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={AIRBNB_LISTING_URL}
              external
              variant="primary"
              className="w-full justify-center"
            >
              Book on Airbnb
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
