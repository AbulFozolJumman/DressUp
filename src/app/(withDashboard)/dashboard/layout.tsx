import Sidebar from "@/components/shared/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "Here User Manage Data",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#00BADE]">
      <div className="flex justify-between container mx-auto px-4">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-base-200 rounded-box ml-2 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
