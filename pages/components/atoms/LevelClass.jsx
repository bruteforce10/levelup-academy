import React from "react";

const LevelClass = ({ level }) => {
  return (
    <div className="flex items-center gap-1 bg-white py-1 px-2 rounded-full">
      <div className="flex gap-[1px] items-end">
        {[...Array(3)].map((_, index) => {
          if (index < level) {
            return (
              <span key={index}>
                <div
                  className={`h-[${
                    4 + index * 3
                  }px] w-[3px] rounded-full bg-deep`}
                ></div>
              </span>
            );
          } else {
            return (
              <span key={index}>
                <div
                  className={`h-[${
                    4 + index * 3
                  }px] w-[3px] rounded-full bg-[#c5cde1]`}
                ></div>
              </span>
            );
          }
        })}
      </div>
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
