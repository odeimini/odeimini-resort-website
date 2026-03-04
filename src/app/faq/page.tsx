import { FAQ_ITEMS, AIRBNB_LISTING_URL } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Ode'imini Resort. Booking through Airbnb, policies, dock rules, and more.",
};

export default function FAQPage() {
  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Booking, policies, and property rules."
          />

          <div className="space-y-8">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="border-b border-northwoods-sand pb-6 last:border-0"
              >
                <h3 className="font-serif text-lg text-northwoods-bark mb-2">
                  {item.q}
                </h3>
                <p className="text-northwoods-bark/80">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-northwoods-sand/30 rounded-lg text-center">
            <p className="text-northwoods-bark mb-4">
              All reservations are handled through Airbnb.
            </p>
            <Button href={AIRBNB_LISTING_URL} external variant="primary">
              Book on Airbnb
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
