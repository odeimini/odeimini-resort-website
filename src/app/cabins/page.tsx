import Image from "next/image";
import {
  STANDARD_CABIN,
  PREMIUM_CABIN,
  IMAGES,
  AIRBNB_LISTING_URL,
} from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "Cabins",
  description:
    "Three standard cabins (24×26 ft) and one premium owner cabin. Full kitchens, living rooms, 2 bedrooms each.",
};

export default function CabinsPage() {
  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Our Cabins"
            subtitle="Comfortable Northwoods accommodations. All reservations through Airbnb."
          />

          {/* Standard Cabins */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-northwoods-bark mb-6">
              Standard Cabins ({STANDARD_CABIN.count} identical units)
            </h2>
            <Card className="overflow-hidden mb-8">
              <div className="md:flex">
                <div className="relative h-64 md:h-auto md:w-1/2 md:min-h-[300px]">
                  <Image
                    src={IMAGES.standardCabin}
                    alt="Standard cabin at Ode'imini Resort"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-northwoods-bark/80 mb-4">
                    <strong>Dimensions:</strong> {STANDARD_CABIN.dimensions}
                  </p>
                  <h3 className="font-medium text-northwoods-bark mb-2">
                    Rooms & Features
                  </h3>
                  <ul className="space-y-2 text-northwoods-bark/80">
                    {STANDARD_CABIN.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button
                      href={AIRBNB_LISTING_URL}
                      external
                      variant="primary"
                    >
                      Book on Airbnb
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Premium Cabin */}
          <div id="premium">
            <h2 className="font-serif text-2xl text-northwoods-bark mb-6">
              {PREMIUM_CABIN.name}
            </h2>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="relative h-64 md:h-auto md:w-1/2 md:min-h-[300px]">
                  <Image
                    src={IMAGES.premiumCabin}
                    alt="Premium cabin at Ode'imini Resort"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4 bg-northwoods-pine text-white text-sm px-3 py-1 rounded">
                    Coming Soon
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-northwoods-bark/80 mb-4">
                    {PREMIUM_CABIN.description}
                  </p>
                  <p className="text-northwoods-bark/80 mb-2">
                    <strong>Dimensions:</strong> {PREMIUM_CABIN.dimensions}
                  </p>
                  <p className="text-northwoods-bark/80 mb-4">
                    This upscale owner/office cabin offers premium amenities. It
                    has limited availability on Airbnb and may not always be
                    listed. Dimensions and full details will be finalized as
                    construction progresses.
                  </p>
                  <p className="text-sm text-northwoods-bark/70 italic">
                    Check our Airbnb listing for current availability.
                  </p>
                  <div className="mt-6">
                    <Button
                      href={AIRBNB_LISTING_URL}
                      external
                      variant="outline"
                    >
                      View on Airbnb
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
