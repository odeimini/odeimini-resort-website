import Image from "next/image";
import {
  PROPERTY,
  IMAGES,
  AIRBNB_LISTING_URL,
} from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "Property",
  description:
    "~400 ft of lakeshore, elevation profile, beach creation plan, dock, and storage building. Wisconsin Northwoods.",
};

export default function PropertyPage() {
  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="The Property"
            subtitle="Lakeshore, elevation, and development plans."
          />

          {/* Concept Imagery */}
          <div className="mb-12">
            <h2 className="font-serif text-xl text-northwoods-bark mb-4">
              Development Vision
            </h2>
            <p className="prose-northwoods mb-6">
              Concept imagery illustrating the planned cabins, waterfront, and
              lakeside retreat experience at Ode&apos;imini Resort.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {IMAGES.propertyGallery.map(({ src, caption, alt }) => (
                <figure
                  key={src}
                  className="rounded-lg overflow-hidden border border-northwoods-sand"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <figcaption className="p-3 text-sm text-northwoods-bark/80 bg-northwoods-cream/50">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Lakeshore */}
          <div className="mb-12">
            <h2 className="font-serif text-xl text-northwoods-bark mb-4">
              Lakeshore
            </h2>
            <p className="prose-northwoods mb-4">
              The property features approximately {PROPERTY.lakeshoreFeet} feet of
              lakeshore. The natural elevation creates a varied profile along the
              water:
            </p>
            <ul className="space-y-2 mb-4">
              {PROPERTY.elevationProfile.map((segment, i) => (
                <li key={i} className="text-northwoods-bark/80">
                  • First {segment.feet} ft: ~{segment.heightAboveLake} ft above
                  lake level
                </li>
              ))}
            </ul>
            <p className="prose-northwoods">
              Our plan includes selective clearing and excavation to create at
              least ~{PROPERTY.beachFrontagePlanned} ft of beach frontage with
              more gentle access to the water.
            </p>
          </div>

          {/* Beach Plan */}
          <div className="mb-12">
            <h2 className="font-serif text-xl text-northwoods-bark mb-4">
              Beach Creation Plan
            </h2>
            <p className="prose-northwoods">
              Through selective clearing and excavation, we aim to create
              approximately {PROPERTY.beachFrontagePlanned} feet of beach
              frontage with gentle, accessible slopes. This will provide guests
              with comfortable lake access for swimming and relaxing by the
              water.
            </p>
          </div>

          {/* Dock & Water Access */}
          <div className="mb-12">
            <h2 className="font-serif text-xl text-northwoods-bark mb-4">
              Dock & Water Access
            </h2>
            <figure className="mb-4 rounded-lg overflow-hidden border border-northwoods-sand">
              <div className="relative aspect-[16/9]">
                <Image
                  src={IMAGES.dockWaterfront}
                  alt="Planned dock and waterfront at golden hour"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
              <figcaption className="p-3 text-sm text-northwoods-bark/80 bg-northwoods-cream/50">
                Planned dock and waterfront access
              </figcaption>
            </figure>
            <p className="prose-northwoods mb-4">{PROPERTY.dock}</p>
            <p className="text-sm text-northwoods-bark/80">
              Dock and lake safety rules will be posted on-site. Life jackets
              are recommended for water activities.
            </p>
          </div>

          {/* Storage Building */}
          <div className="mb-12">
            <h2 className="font-serif text-xl text-northwoods-bark mb-4">
              Storage Building
            </h2>
            <p className="prose-northwoods">
              {PROPERTY.storageBuilding} The structure will support beach and boat
              storage, with an owner garage concept for private use.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="p-4 bg-northwoods-sand/50 rounded-lg border border-northwoods-sand">
            <p className="text-sm text-northwoods-bark/80 italic">
              {PROPERTY.disclaimer}
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button href={AIRBNB_LISTING_URL} external variant="primary">
              View on Airbnb
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
