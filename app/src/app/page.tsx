import { NeoButton } from "@/components/ui/neo-button";
import { NeoCard } from "@/components/ui/neo-card";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFFAF0]">
      <header className="p-6">
        <h1 className="text-4xl text-neo-title">DigiHealth</h1>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-6 px-4">
            <h2 className="text-4xl md:text-5xl text-neo-title leading-tight">
              Transforming Clinical Studies
              <br />
              <span className="text-[#FF6B6B]">with Web3</span>
            </h2>

            <p className="text-lg md:text-xl text-neo-body max-w-2xl mx-auto">
              DigiHealth enables doctors, researchers, and labs to post clinical
              studies, while participants can join and receive crypto payouts.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <NeoButton variant="peach" className="w-full sm:w-auto">
                <Link href="/app" className="w-full">
                  Launch App
                </Link>
              </NeoButton>
              <NeoButton variant="mint" className="w-full sm:w-auto">
                <Link href="/features" className="w-full">
                  Learn More
                </Link>
              </NeoButton>
            </div>
          </section>

          {/* Features Section */}
          <section
            id="features"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
          >
            <FeatureCard
              title="Web3 Integration"
              description="Secure crypto payouts for study participants"
              variant="mint"
            />
            <FeatureCard
              title="Data Privacy"
              description="Advanced privacy tech including ZKPs and FHE"
              variant="peach"
            />
            <FeatureCard
              title="Multi-omics Integration"
              description="Seamlessly integrate various data types in studies"
              variant="yellow"
            />
            <FeatureCard
              title="Graph-based Integration"
              description="Utilize graph databases for complex data relationships"
              variant="lavender"
            />
            <FeatureCard
              title="Pathway Mapping"
              description="Visualize and analyze biological pathways"
              variant="aqua"
            />
            <FeatureCard
              title="Democratized Access"
              description="Open access to anonymized study results"
              variant="mint"
            />
          </section>
        </div>
      </main>

      <footer className="mt-12 py-6 bg-black text-white text-center">
        <p className="text-neo-body">
          &copy; 2025 DigiHealth. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  variant,
}: {
  title: string;
  description: string;
  variant: "mint" | "peach" | "yellow" | "lavender" | "aqua";
}) {
  return (
    <NeoCard variant={variant} className="p-6 h-full">
      <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </NeoCard>
  );
}
