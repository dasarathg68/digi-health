export interface Study {
  id: string;
  title: string;
  description: string;
  reward: string;
  status: "active" | "completed" | "pending";
  creatorId: string;
  requirements: string[];
  dataTypes: string[];
  privacyMeasures: string[];
  participantCount: number;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Participant {
  id: string;
  address: string;
  studies: string[];
  totalEarnings: string;
  dataContributions: number;
  wearables: string[];
  dataPreferences: {
    shareGenomic: boolean;
    shareWearable: boolean;
    shareClinic: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}
