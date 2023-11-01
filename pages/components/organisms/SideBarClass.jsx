import React from "react";

export default function SideBarClass() {
  return (
    <div className="min-w-[200px] sticky top-20 h-fit max-w-[500px] py-[38px] px-[32px] bg-[#fff] rounded-2xl flex-col justify-start items-start gap-[34px] inline-flex">
      <div className="text-black text-md font-semibold ">About</div>
      <div className="text-black text-opacity-40 text-md font-semibold ">
        Gallery
      </div>
      <div className="text-black text-opacity-40 text-md font-semibold ">
        Main Topic
      </div>
      <div className="text-black text-opacity-40 text-md font-semibold ">
        Tools
      </div>
      <div className="text-black text-opacity-40 text-md font-semibold ">
        Tools
      </div>
      <div className="text-black text-opacity-40 text-md font-semibold ">
        Lessons
      </div>
      <div className="text-black text-opacity-40 text-md font-semibold ">
        Reviews
      </div>
      <div className="px-[12px] w-full cursor-pointer py-[9px] bg-blue-700 rounded-[26px] justify-center items-start inline-flex">
        <div className="text-white text-md font-bold  ">Apply Now</div>
      </div>
    </div>
  );
}
