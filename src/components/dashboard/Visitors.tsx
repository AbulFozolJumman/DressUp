"use client";

import CountUp from "react-countup";

const Visitors = () => {
  return (
    <div className="pb-10">
      <h1 className="text-3xl text-[#093045] font-bold mb-6 text-center">
        Visitors Statistics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <div className="bg-[#093045] py-10 rounded-md">
          <h1 className="text-7xl font-bold text-center text-white">
            <CountUp end={120} duration={2} enableScrollSpy />+
          </h1>
          <p className="text-xl pt-3 text-center text-white">Today</p>
        </div>
        <div className="bg-[#093045] py-10 rounded-md">
          <h1 className="text-7xl font-bold text-center text-white">
            <CountUp end={1400} duration={2} enableScrollSpy />
          </h1>
          <p className="text-xl pt-3 text-center text-white">This Week</p>
        </div>
        <div className="bg-[#093045] py-10 rounded-md mb-5 md:mb-0">
          <h1 className="text-7xl font-bold text-center text-white">
            <CountUp end={24000} duration={2} enableScrollSpy />
          </h1>
          <p className="text-xl pt-3 text-center text-white">This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
