import Image from "next/image";
import { IMAGES, AIRBNB_LISTING_URL } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "Gallery",
  description:
    "Site photos, concept, and progress. Ode'imini Resort — Northwoods Wisconsin.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Gallery"
            subtitle="Site photos, concept, and progress as development continues."
          />

          {/* Site Photos — Real land photos */}
          <div className="mb-12">
            <h2 className="font-serif text-xl text-northwoods-bark mb-6">
              Site Photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {IMAGES.landPhotos.map(({ src, caption }) => (
                <figure
                  key={src}
                  className="rounded-lg overflow-hidden border border-northwoods-sand"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={src}
                      alt={caption}
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

          {/* Concept / Inspiration — Placeholders for future renderings */}
          <div className="mb-12">
            <h2 className="font-serif text-xl text-northwoods-bark mb-6">
              Concept / Inspiration
            </h2>
            <p className="prose-northwoods mb-4 text-sm text-northwoods-bark/80">
              Renderings and inspiration imagery will be added as cabin designs
              and site plans are finalized.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {IMAGES.gallery.slice(0, 8).map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden border border-northwoods-sand"
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1} - concept or inspiration`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Progress Photos — Placeholders */}
          <div>
            <h2 className="font-serif text-xl text-northwoods-bark mb-6">
              Progress Photos <span className="text-sm font-normal text-northwoods-bark/70">(Coming Soon)</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {IMAGES.gallery.slice(8, 12).map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden border border-northwoods-sand"
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 9} - progress`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-northwoods-bark/70 italic">
              Construction updates and progress photos will be added as
              development continues.
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
