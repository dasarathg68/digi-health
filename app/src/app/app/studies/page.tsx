import { Button } from "@/components/ui/button";

export default function StudiesPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Available Studies</h2>
      <div className="space-y-6">
        <StudyCard
          title="Multi-omics Analysis of Cardiovascular Disease"
          description="This study aims to integrate genomic, proteomic, and metabolomic data to identify novel biomarkers for cardiovascular disease."
          reward="5 ETH"
          color="#4ECDC4"
        />
        <StudyCard
          title="Graph-based Integration of Neurological Disorders"
          description="Using graph databases to map complex relationships between genetic variants, protein interactions, and clinical outcomes in neurological disorders."
          reward="3.5 ETH"
          color="#FF6B6B"
        />
        <StudyCard
          title="Pathway Mapping in Cancer Progression"
          description="Analyzing signaling pathways involved in cancer progression using multi-omics data and advanced pathway mapping techniques."
          reward="4 ETH"
          color="#F7B801"
        />
      </div>
    </div>
  );
}

function StudyCard({
  title,
  description,
  reward,
  color,
}: {
  title: string;
  description: string;
  reward: string;
  color: string;
}) {
  return (
    <div
      className="p-6 bg-white neo-brutalism-border neo-brutalism-shadow hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-300"
      style={{ borderColor: color }}
    >
      <h3 className="text-xl font-bold mb-2" style={{ color }}>
        {title}
      </h3>
      <p className="mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold">Reward: {reward}</span>
        <Button className="bg-black text-white hover:bg-gray-800 neo-brutalism-button">
          Join Study
        </Button>
      </div>
    </div>
  );
}
