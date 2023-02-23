import React from "react";

const Stats = ({ count }) => {
  return (
    <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      Total Count:{count}
    </div>
  );
};

export default Stats;
