/* eslint-disable @next/next/no-img-element */
import React from "react";
import SideBarCourse from "../components/organisms/SideBarCourse";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Transactions() {
  return (
    <div className="h-[10000px]  flex gap-x-8  container mx-auto ">
      <SideBarCourse />
      <section className="mt-[60px] w-full">
        <div className="overflow-x-scroll   ">
          <table className="table  ">
            <thead>
              <tr>
                <th>Cover</th>
                <th>Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="/img/dummy-class.webp"
                    className="rounded-xl min-w-[90px] w-[100px]"
                    alt="cover"
                  />
                </td>
                <td>
                  Full-Stack Website Developer: Website Jualan Tiket Event
                </td>
                <td>514,910</td>
                <td>2023-11-07 07:42:09</td>
                <td>
                  <div className="badge badge-warning whitespace-nowrap">
                    Payment Pending
                  </div>
                </td>
                <td>
                  <button className="px-6 whitespace-nowrap bg-prime rounded-full text-[#fff] w-full hover:scale-90 transition-all  font-bold py-3">
                    Bantuan Admin
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 bg-[#e5e9f2] rounded-3xl scale-75  p-2 max-sm:flex gap-x-2 justify-center hidden w-6/12">
          <p>Swipe to see more</p>
          <FiArrowRight size={22} />
        </div>
      </section>
    </div>
  );
}
