import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "DigiHealth App",
  description: "Web3-powered clinical studies platform",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFAF0]">
      <Navbar
        user={{
          name: "John Doe",
          email: "john@example.com",
        }}
      />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
