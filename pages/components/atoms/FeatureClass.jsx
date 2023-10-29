import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import LevelClass from "./LevelClass";

export default function FeatureClass({ sertifikat, user, level }) {
  return (
    <div className="flex gap-2">
      <LevelClass level={level} />
      {sertifikat && (
        <div className="flex items-center gap-1 bg-white py-1 px-2 rounded-full">
          <BsCheck2 />
          <span className="text-xs font-medium">Sertifikat</span>
        </div>
      )}
      <div className="flex items-center gap-2 bg-white py-1 px-2 rounded-full">
        <FiUsers size={14} />
        <span className="text-xs font-medium">{user}</span>
      </div>
    </div>
  );
}
