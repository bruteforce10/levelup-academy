import React from "react";
import SideBarCourse from "../components/organisms/SideBarCourse";
import Head from "next/head";

export default function MyEbook() {
  return (
    <div className="flex gap-x-8 max-lg:px-8 relative container mx-auto ">
      <Head>
        <title>My Ebooks | Level-Up Academy</title>
      </Head>
      <SideBarCourse />
      <section className="mt-[60px] ">Coming Soon...</section>
    </div>
  );
}
