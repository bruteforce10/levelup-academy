import React, { useEffect, useState } from "react";

export default function FollowUp() {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="container px-8 mx-auto space-y-8">
      <div className="flex gap-4 max-sm:gap-4 items-center max-sm:flex-wrap">
        <div className="form-control w-4/12 max-sm:w-full">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            name="email"
            className="input bg-[#E5E9F2] w-full rounded-full"
          />
        </div>
        <div className="form-control w-5/12  max-sm:w-full">
          <label className="label">
            <span className="label-text text-lg">Order-Id</span>
          </label>
          <input
            type="text"
            placeholder="Nomor Order-Id"
            name="order_id"
            className="input bg-[#E5E9F2] w-full rounded-full"
          />
        </div>
        <div className="dropdown w-3/12 self-end max-sm:w-full">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#E5E9F2]">
            Pilih Course
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content whitespace-nowrap bg-[#E5E9F2] z-[1] menu p-2 shadow rounded-box"
          >
            <li>
              <a>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                magnam minima incidunt amet animi aspernatur.
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section>
        <div className="overflow-x-auto mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Status Follow-Up</th>
                <th>Status Kelas</th>
                <th>Action</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
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
