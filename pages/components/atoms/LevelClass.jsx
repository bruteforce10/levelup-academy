import React from "react";

const LevelClass = ({ level }) => {
  return (
    <div className="flex items-center gap-1 bg-white py-1 px-2 rounded-full">
      {level === 0 ? (
        <div className="flex gap-[1px] items-end">
          <span>
            <div className="w-[3px] h-[4px] rounded-full bg-[#b1b1b1]"></div>
          </span>
          <span>
            <div className="w-[3px] h-[8px] rounded-full bg-[#b1b1b1]"></div>
          </span>
          <span>
            <div className="w-[3px] h-[12px] rounded-full bg-[#b1b1b1]"></div>
          </span>
        </div>
      ) : level === 1 ? (
        <div className="flex gap-[1px] items-end">
          <span>
            <div className="w-[3px] h-[4px] rounded-full bg-deep"></div>
          </span>
          <span>
            <div className="w-[3px] h-[8px] rounded-full bg-[#b1b1b1]"></div>
          </span>
          <span>
            <div className="w-[3px] h-[12px] rounded-full bg-[#b1b1b1]"></div>
          </span>
        </div>
      ) : level === 2 ? (
        <div className="flex gap-[1px] items-end">
          <span>
            <div className="w-[3px] h-[4px] rounded-full bg-deep"></div>
          </span>
          <span>
            <div className="w-[3px] h-[8px] rounded-full bg-deep"></div>
          </span>
          <span>
            <div className="w-[3px] h-[12px] rounded-full bg-[#b1b1b1]"></div>
          </span>
        </div>
      ) : (
        <div className="flex gap-[1px] items-end">
          <span>
            <div className="w-[3px] h-[4px] rounded-full bg-deep"></div>
          </span>
          <span>
            <div className="w-[3px] h-[8px] rounded-full bg-deep"></div>
          </span>
          <span>
            <div className="w-[3px] h-[12px] rounded-full bg-deep"></div>
          </span>
        </div>
      )}
      <span className="text-xs font-medium">
        {level === 0
          ? "All Level"
          : level === 1
          ? "Pemula"
          : level === 2
          ? "Intermediate"
          : "Expert"}
      </span>
    </div>
  );
};

export default LevelClass;
