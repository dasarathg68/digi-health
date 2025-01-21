"use client";

import { NeoCard } from "@/components/ui/neo-card";
import Link from "next/link";
import { NeoButton } from "@/components/ui/neo-button";
import { useRouter } from "next/navigation";

export default function FeaturesPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#FFFAF0]">
      <header className="p-6 cursor-pointer" onClick={() => router.push("/")}>
        <h1 className="text-4xl text-neo-title">DigiHealth</h1>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-neo-title mb-6">
              Our Features
            </h2>
            <p className="text-lg text-neo-body max-w-2xl mx-auto">
              Discover how DigiHealth is progressing clinical studies with
              cutting-edge technology
            </p>
          </section>

          <div className="grid gap-8">
            <FeatureSection
              title="Web3 Integration"
              description="Our platform leverages blockchain technology to ensure transparent and secure crypto payouts for study participants. Smart contracts automate payments based on study milestones, while maintaining complete audit trails."
              variant="mint"
            />

            <FeatureSection
              title="Advanced Privacy Technology"
              description="Using Zero-Knowledge Proofs (ZKPs) and Fully Homomorphic Encryption (FHE), we ensure participant data remains private while still enabling meaningful research analysis. Your sensitive information never leaves your control."
              variant="peach"
            />

            <FeatureSection
              title="Multi-omics Data Integration"
              description="Seamlessly combine genomics, proteomics, metabolomics, and other -omics data types in your studies. Our platform handles complex data relationships while maintaining data integrity and accessibility."
              variant="yellow"
            />

            <FeatureSection
              title="Graph Database Architecture"
              description="Our graph-based data model captures complex relationships between biological entities, enabling sophisticated queries and discoveries that would be impossible with traditional databases."
              variant="lavender"
            />

            <FeatureSection
              title="Interactive Pathway Analysis"
              description="Visualize and analyze biological pathways in real-time. Our interactive tools help researchers understand complex molecular interactions and identify potential therapeutic targets."
              variant="aqua"
            />

            <FeatureSection
              title="Open Science Initiative"
              description="Contributing to the democratization of science, we provide open access to anonymized study results, fostering collaboration and accelerating scientific discovery."
              variant="mint"
            />
          </div>
        </div>
      </main>

      <footer className="mt-12 py-6 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-neo-body mb-4">
            Ready to transform your research?
          </p>
          <NeoButton variant="peach">
            <Link href="/app">Get Started Now</Link>
          </NeoButton>
        </div>
      </footer>
    </div>
  );
}

function FeatureSection({
  title,
  description,
  variant,
}: {
  title: string;
  description: string;
  variant: "mint" | "peach" | "yellow" | "lavender" | "aqua";
}) {
  return (
    <NeoCard variant={variant} className="p-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg leading-relaxed">{description}</p>
    </NeoCard>
  );
}
