import React, { useEffect, useState } from "react";
import SideBarCourse from "../components/organisms/SideBarCourse";
import SubHeading from "../components/atoms/SubHeading";
import CardMyCourse from "../components/molecules/CardMyCourse";
import { useSession } from "next-auth/react";
import { getPaymentUser } from "@/lib/service";

export default function MyClass() {
  const [data, setData] = useState([]);
  const { data: session } = useSession();
  const email = session?.user?.email;

  useEffect(() => {
    getPaymentUser(email).then((result) => {
      if (result) {
        setData(result);
      }
    });
  }, []);

  return (
    <div className="h-[10000px] flex gap-x-8 relative container mx-auto ">
      <SideBarCourse />
      <section className="mt-[60px] ">
        <div className="space-y-3">
          <SubHeading size="3xl">My Courses</SubHeading>
          <p className="max-md:text-center max-w-xs leading-relaxed">
            Upgrade terus ilmu dan pengalaman terbaru kamu di bidang teknologi
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          {data?.map((item) => (
            <CardMyCourse key={item.id} data={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
