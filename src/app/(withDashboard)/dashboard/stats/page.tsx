import SalesChart from "@/components/dashboard/SalesChart";
import Visitors from "@/components/dashboard/Visitors";
import React from "react";

const page = () => {
  return (
    <div className="px-5 py-10">
      <Visitors />
      <SalesChart />
    </div>
  );
};

export default page;
