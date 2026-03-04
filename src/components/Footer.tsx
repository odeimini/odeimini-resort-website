import Link from "next/link";
import { SITE, NAV_LINKS, AIRBNB_LISTING_URL } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-northwoods-bark text-northwoods-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg mb-3">{SITE.name}</h3>
            <p className="text-sm opacity-90">{SITE.tagline}</p>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-3">Explore</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/investors"
                  className="text-sm hover:text-white transition-colors opacity-80"
                >
                  Project Overview
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-3">Reservations</h3>
            <p className="text-sm opacity-90 mb-2">
              Reservations are handled through Airbnb.
            </p>
            <a
              href={AIRBNB_LISTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-northwoods-sand hover:text-white transition-colors underline"
            >
              View on Airbnb
            </a>
            <p className="text-sm opacity-90 mt-4">
              Contact:{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-white transition-colors"
              >
                {SITE.email}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-northwoods-bark/50 text-center text-sm opacity-80">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
