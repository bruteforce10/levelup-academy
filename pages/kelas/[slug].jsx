import Image from "next/image";
import React, { useEffect, useState } from "react";
import BoxChecklist from "../components/atoms/BoxChecklist";
import SubHeading from "../components/atoms/SubHeading";
import SideBarClass from "../components/organisms/SideBarClass";
import ImageSliderSection from "../components/organisms/ImageSliderSection";
import KeyPointSection from "../components/organisms/KeyPointSection";
import SoftwareListSection from "../components/organisms/SoftwareListSection";
import CourseLessonsListSection from "../components/organisms/CourseLessonsListSection";
import ReviewClassSection from "../components/organisms/ReviewClassSection";
import CardBuySection from "../components/organisms/CardBuySection";
import DescriptionSection from "../components/organisms/DescriptionSection";
import { useRouter } from "next/router";
import { getClassById } from "@/lib/service";
import moment from "moment/moment";
import AuthorCourse from "../components/organisms/AuthorCourse";
import CallSectionCourse from "../components/organisms/CallSectionCourse";
import { useSession } from "next-auth/react";

export default function Preview() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  const { data: session } = useSession();

  useEffect(() => {
    if (slug) {
      getClassById(slug).then((result) => {
        setData(result);
        console.log(result);
      });
    }
  }, [slug]);

  return (
    data && (
      <div className="px-4 container mt-[60px] mx-auto pb-18">
        <section className="flex  gap-8 justify-between max-md:flex-wrap-reverse ">
          <div className="space-y-6 w-7/12 max-md:w-full">
            <div className="flex items-center gap-[32px]">
              <div className="flex items-center gap-2">
                <Image
                  src="/icon/globe.svg"
                  alt="globe"
                  height={24}
                  width={24}
                />
                <p className="text-lg max-xl:text-sm font-medium">
                  Release date {moment(data?.createdAt).format("MMMM YYYY")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icon/analyse.svg"
                  alt="globe"
                  height={24}
                  width={24}
                />
                <p className="text-lg max-xl:text-sm font-medium">
                  Last updated {moment().format("MMMM YYYY")}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className=" text-gray-800 text-4xl font-bold  leading-[46.80px]">
                {data?.judul}
              </h2>
              <p className=" text-gray-800 text-lg max-xl:text-md font-normal leading-loose">
                {data?.introduction}
              </p>
            </div>
            <div className="flex h-12 gap-4 flex-wrap">
              <BoxChecklist>
                <span className="font-bold mr-1">43</span>
                Member Enrolled
              </BoxChecklist>
              {data?.sertifikat && (
                <BoxChecklist>Dapat Sertifikat</BoxChecklist>
              )}
              <BoxChecklist>
                {data?.level === 0
                  ? "Cocok Untuk Semua Level"
                  : data?.level === 1
                  ? "Cocok untuk pemula"
                  : data?.level === 2
                  ? "Intermediate"
                  : "Expert"}
              </BoxChecklist>
            </div>
          </div>
          <div className="w-5/12 flex justify-end max-md:justify-start max-md:w-full">
            <Image
              className="rounded-2xl w-[400px] object-cover "
              src={data?.gambarClass?.url}
              alt="preview"
              height={600}
              width={600}
            />
          </div>
        </section>
        <section className="mt-36 max-sm:mt-[200px] flex gap-10">
          <SideBarClass />
          <div className="space-y-20">
            <div className="space-y-4">
              <SubHeading size="3xl">Develop Your Skills</SubHeading>
              <DescriptionSection about={data?.about?.html} />
            </div>
            <div className="space-y-6">
              <SubHeading size="3xl">Sneak Peak</SubHeading>
              <ImageSliderSection courosel={data?.couroselGambar} />
            </div>
            <div className="space-y-6">
              <SubHeading size="3xl">Key Points</SubHeading>
              <KeyPointSection keyPoints={data?.keyPoints} />
            </div>
            <div className="space-y-6">
              <SubHeading size="3xl">Designed For</SubHeading>
              <KeyPointSection keyPoints={data?.designedFor} />
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <SubHeading size="3xl">Tools Pendukung</SubHeading>
                <p className="max-md:text-center">
                  Lengkapi semua pendukung di bawah sebelum belajar
                </p>
              </div>
              <SoftwareListSection software={data?.softwareList} />
            </div>
            <div className="space-y-6">
              <SubHeading size="3xl">
                Recording Course ini dibuat oleh
              </SubHeading>
              <AuthorCourse author={data?.authorCourse} />
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <SubHeading size="3xl">Course Lessons</SubHeading>
              </div>
              <CourseLessonsListSection styllabus={data?.sillabusList} />
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <SubHeading size="3xl">Our Happy Students</SubHeading>
                <p className="max-md:text-center">
                  Review setelah bergabung di kelas Full-Stack Web Developer:
                  Toko Online
                </p>
              </div>
              <ReviewClassSection reviews={data?.reviews} />
            </div>
            <div className="space-y-6">
              <div className="space-y-3 text-center mx-auto">
                <SubHeading size="3xl">Low Risk, High Return</SubHeading>
                <p className="w-[400px] max-sm:w-full mx-auto">
                  Investasi kepada diri kita sendiri memberikan leverage kuat
                  untuk masa depan karir kita
                </p>
              </div>
              <CardBuySection
                price={data?.price}
                payment={data?.id}
                email={session?.user?.email}
                title={data?.judul}
              />
            </div>
            <CallSectionCourse />
          </div>
        </section>
      </div>
    )
  );
}
