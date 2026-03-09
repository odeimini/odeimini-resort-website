import Image from "next/image";
import Link from "next/link";
import {
  SITE,
  IMAGES,
  AMENITIES,
  STANDARD_CABIN,
  PREMIUM_CABIN,
  ROADMAP,
  AIRBNB_LISTING_URL,
} from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[70vh] min-h-[400px]">
        <Image
          src={IMAGES.hero}
          alt={IMAGES.heroAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-northwoods-bark/30 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 drop-shadow-lg">
              {SITE.name}
            </h1>
            <p className="text-xl md:text-2xl opacity-95 drop-shadow">
              {SITE.tagline}
            </p>
            <p className="mt-4 text-lg opacity-90">
              A quiet lakeside retreat in the Northwoods of Wisconsin
            </p>
            <div className="mt-8">
              <Button
                href={AIRBNB_LISTING_URL}
                external
                className="bg-northwoods-bark text-white border-northwoods-bark hover:bg-northwoods-pine hover:border-northwoods-pine shadow-lg"
              >
                View on Airbnb
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="The Experience"
            subtitle="Private lakeshore, quiet cabins, and the peace of the Northwoods. Ode'imini Resort offers a retreat where you can disconnect and recharge."
          />
          <p className="prose-northwoods text-lg">
            Our 4-cabin lakeside property features approximately 400 feet of
            lakeshore. We&apos;re currently in development—selective clearing,
            excavation, and construction are underway to create a welcoming beach
            frontage, quality dock, and comfortable cabins. We look forward to
            welcoming you.
          </p>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Amenities"
            subtitle="Everything you need for a comfortable Northwoods stay."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {AMENITIES.map((item) => (
              <div
                key={item}
                className="p-4 rounded-lg border border-northwoods-sand bg-northwoods-cream/50 text-center"
              >
                <span className="text-northwoods-bark font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabins Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Our Cabins"
            subtitle="Three standard cabins and one premium owner cabin."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Cabins */}
            <Card>
              <div className="relative h-48">
                <Image
                  src={IMAGES.standardCabin}
                  alt="Standard cabin exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-northwoods-bark mb-2">
                  Standard Cabins ({STANDARD_CABIN.count})
                </h3>
                <p className="text-sm text-northwoods-bark/80 mb-3">
                  {STANDARD_CABIN.dimensions} • Full kitchen, living room, 1 bath,
                  2 bedrooms
                </p>
                <ul className="text-sm text-northwoods-bark/80 space-y-1 mb-4">
                  {STANDARD_CABIN.rooms.map((room) => (
                    <li key={room}>• {room}</li>
                  ))}
                </ul>
                <Button href="/cabins" variant="outline" className="!py-2">
                  Learn More
                </Button>
              </div>
            </Card>

            {/* Premium Cabin */}
            <Card>
              <div className="relative h-48">
                <Image
                  src={IMAGES.premiumCabin}
                  alt="Premium cabin exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 right-3 bg-northwoods-pine text-white text-xs px-2 py-1 rounded">
                  Coming Soon
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-northwoods-bark mb-2">
                  {PREMIUM_CABIN.name}
                </h3>
                <p className="text-sm text-northwoods-bark/80 mb-3">
                  {PREMIUM_CABIN.description} • Limited availability
                </p>
                <p className="text-sm text-northwoods-bark/70 italic mb-4">
                  Upscale owner/office cabin. Dimensions TBD. Not always available
                  on Airbnb.
                </p>
                <Link
                  href="/cabins#premium"
                  className="text-northwoods-pine font-medium text-sm hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision / Roadmap */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Our Vision"
            subtitle="Development roadmap — we're building something special."
          />
          <p className="prose-northwoods mb-8 text-center">
            Ode&apos;imini Resort is in active development. Our construction plan
            includes:
          </p>
          <ul className="space-y-3">
            {ROADMAP.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-northwoods-bark"
              >
                <span className="text-northwoods-pine font-bold">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-northwoods-bark/70 text-center italic">
            Plans are subject to permitting and timeline. We&apos;ll share updates
            as development progresses.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
