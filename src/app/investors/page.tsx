import {
  INVESTOR,
  SITE,
} from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";

export const metadata = {
  title: "Project Overview",
  description:
    "Ode'imini Resort — Native-owned lakeside development. Construction phases, use of funds, community impact, risk mitigation.",
};

export default function InvestorsPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Project Overview"
          subtitle="For lenders, investors, and grantmakers. Ode'imini Resort — Native-owned lakeside development in Wisconsin."
        />

        {/* Summary */}
        <Card className="p-6 mb-8">
          <h2 className="font-serif text-xl text-northwoods-bark mb-4">
            Project Summary
          </h2>
          <p className="prose-northwoods">{INVESTOR.summary}</p>
        </Card>

        {/* Construction Phases */}
        <Card className="p-6 mb-8">
          <h2 className="font-serif text-xl text-northwoods-bark mb-4">
            Construction Phases (High Level)
          </h2>
          <ol className="space-y-2 list-decimal list-inside text-northwoods-bark/80">
            {INVESTOR.phases.map((phase, i) => (
              <li key={i}>{phase}</li>
            ))}
          </ol>
        </Card>

        {/* Use of Funds */}
        <Card className="p-6 mb-8">
          <h2 className="font-serif text-xl text-northwoods-bark mb-4">
            Use of Funds (Placeholder Categories)
          </h2>
          <ul className="space-y-2 text-northwoods-bark/80">
            {INVESTOR.useOfFunds.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </Card>

        {/* Community Impact */}
        <Card className="p-6 mb-8">
          <h2 className="font-serif text-xl text-northwoods-bark mb-4">
            Community Impact
          </h2>
          <ul className="space-y-2 text-northwoods-bark/80">
            {INVESTOR.communityImpact.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </Card>

        {/* Risk Mitigation */}
        <Card className="p-6 mb-8">
          <h2 className="font-serif text-xl text-northwoods-bark mb-4">
            Risk Mitigation
          </h2>
          <ul className="space-y-2 text-northwoods-bark/80">
            {INVESTOR.riskMitigation.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </Card>

        <p className="text-sm text-northwoods-bark/70 text-center">
          For more information, contact {SITE.email}. No sensitive personal
          information is shared on this page.
        </p>
      </div>
    </section>
  );
}
