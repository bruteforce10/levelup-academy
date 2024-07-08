import React, { useEffect, useState } from "react";
import SideBarCourse from "../components/organisms/SideBarCourse";
import SubHeading from "../components/atoms/SubHeading";
import CardMyCourse from "../components/molecules/CardMyCourse";
import { useSession } from "next-auth/react";
import {
  getPaymentUser,
  updateBundleClass,
  updateCoursePayment,
} from "@/lib/service";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { IoMdRefresh } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function MyClass() {
  const [data, setData] = useState([]);
  const { data: session } = useSession();
  const email = session?.user?.email;
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!email) return;

    const fetchPayments = async () => {
      try {
        const result = await getPaymentUser(email);

        if (result) {
          await Promise.all(
            result.map(async (classItem) => {
              const res = await fetch(`/api/payment/${classItem.idPayment}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              });

              const resJson = await res.json();
              if (resJson.transaction_status === "settlement") {
                await updateCoursePayment({
                  id: classItem.id,
                  email: session.user.email,
                });
              }
            })
          );

          const filteredData = result.filter(
            (item) =>
              item.statusPayment === "paymentSuccess" &&
              item.bundelPayment.length === 0
          );

          const filteredDataBundle = result.filter(
            (item) =>
              item.bundelPayment.length > 0 &&
              item.statusPayment === "paymentSuccess"
          );

          const course = filteredData.map((item) => item.coursePayment).flat();

          const courseBundle = filteredDataBundle
            .map((item) =>
              item.bundelPayment.map((bundle) => bundle.courses).flat()
            )
            .flat();

          const courses = [...course, ...courseBundle];
          const uniqueCourses = Array.from(
            new Set(courses.map((course) => course.id))
          ).map((id) => {
            return courses.find((course) => course.id === id);
          });

          setData(uniqueCourses);
        }
      } catch (error) {
        console.error("Error fetching payment data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, [email, session?.user?.email]);

  return (
    <div className="flex gap-x-8 relative container max-lg:px-8 mx-auto">
      <Head>
        <title>My Courses | Level-Up Academy</title>
      </Head>
      <SideBarCourse />

      <section className="mt-[60px] w-full">
        <div className="space-y-3">
          <div className="flex justify-between lg:pr-6">
            <SubHeading size="3xl">My Courses</SubHeading>
            <div
              onClick={() => router.refresh()}
              className="text-[#6E6E6E] font-medium cursor-pointer flex gap-2 items-center"
            >
              <IoMdRefresh />
              <p>Refresh</p>
            </div>
          </div>
          <p className="max-w-xs leading-relaxed">
            Upgrade terus ilmu dan pengalaman terbaru kamu di bidang teknologi
          </p>
        </div>
        {isLoading ? (
          <div className="mt-14 flex max-sm:flex-col gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex w-52 max-sm:w-full flex-col gap-4"
              >
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
          </div>
        ) : data.length <= 0 ? (
          <div className="space-y-8 mx-auto mt-14">
            <Image
              src={"/icon/class-null.svg"}
              alt="class null"
              className="mx-auto"
              width={400}
              height={400}
            />
            <p className="md:text-lg text-opacity-80 text-center leading-relaxed text-deep">
              Sepertinya kamu belum mengikuti kelas.
              <br /> Jangan khawatir, yuk cari kelas yang sesuai dengan
              kebutuhanmu!
            </p>
            <div className="mx-auto text-center w-full">
              <Link
                href={"/kelas"}
                className="bg-prime inline-block py-3 px-6 rounded-full text-md font-extrabold text-white border-4 border-white hover:border-[#a1b7e7] transition-all"
              >
                Lihat Katalog Kelas
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">
            {data.map((item) => (
              <CardMyCourse key={item.id} data={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
