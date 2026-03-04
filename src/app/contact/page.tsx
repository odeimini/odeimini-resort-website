import { SITE, AIRBNB_LISTING_URL } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata = {
  title: "Contact",
  description:
    "Contact Ode'imini Resort. Email odeiminiresort@gmail.com. Partnerships and media inquiries welcome.",
};

export default function ContactPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          title="Contact Us"
          subtitle="We'd love to hear from you."
        />

        <Card className="p-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg text-northwoods-bark mb-2">
                Email
              </h3>
              <a
                href={`mailto:${SITE.email}`}
                className="text-northwoods-pine hover:underline"
              >
                {SITE.email}
              </a>
            </div>

            <div>
              <h3 className="font-serif text-lg text-northwoods-bark mb-2">
                Reservations
              </h3>
              <p className="text-northwoods-bark/80 mb-2">
                Reservations are handled through Airbnb.
              </p>
              <Button href={AIRBNB_LISTING_URL} external variant="primary">
                View on Airbnb
              </Button>
            </div>

            <div>
              <h3 className="font-serif text-lg text-northwoods-bark mb-2">
                Partnerships / Media
              </h3>
              <p className="text-northwoods-bark/80">
                For partnership inquiries or media requests, please reach out via
                email at{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-northwoods-pine hover:underline"
                >
                  {SITE.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
