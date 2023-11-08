import React from "react";
import SideBarCourse from "../components/organisms/SideBarCourse";

export default function Transactions() {
  return (
    <div className="h-[10000px] flex gap-x-8 relative container mx-auto ">
      <SideBarCourse />
      <section className="mt-[60px]">
        <div className="overflow-x-auto ">
          <table className="table w-full ">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
