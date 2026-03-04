import { Button } from "./Button";
import { AIRBNB_LISTING_URL } from "@/content/site";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function CTABanner({
  title = "Ready to Book Your Stay?",
  subtitle = "Reservations are handled through Airbnb.",
  className = "",
}: CTABannerProps) {
  return (
    <section
      className={`bg-northwoods-pine text-white py-12 px-6 ${className}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl mb-3">{title}</h2>
        <p className="mb-6 opacity-90">{subtitle}</p>
        <Button
          href={AIRBNB_LISTING_URL}
          external
          variant="secondary"
          className="bg-white text-northwoods-pine border-white hover:bg-northwoods-cream hover:border-northwoods-cream"
        >
          View on Airbnb
        </Button>
      </div>
    </section>
  );
}
