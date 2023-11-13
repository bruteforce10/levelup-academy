import { MyContext } from "@/lib/context/AppContext";
import { categoryClass } from "@/lib/data";
import Heading from "@/pages/components/heading";
import CardClass from "@/pages/components/molecules/CardClass";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function CategoryClass() {
  const { query } = useRouter();
  const [data, setData] = useState([]);
  const [getClass, setGetClass] = useState([]);
  const { dataClass } = MyContext();

  console.log(getClass.length);

  useEffect(() => {
    if (query?.category) {
      const result = categoryClass.filter((item) => {
        return item?.id === query?.category;
      });
      setData(result);
      setGetClass(dataClass.filter((item) => item.category === result[0].id));
    }
  }, [query?.category, dataClass]);

  return (
    <div className="px-4 container mt-[60px] mx-auto">
      <div>
        <Heading
          tag={"#LevelUpYourCareer"}
          judul={<span>{data[0]?.name}</span>}
          align={"max-sm:text-center"}
        />
        <p className="md:text-lg font-medium -mt-6 max-sm:text-center max-sm:w-full w-[30rem] leading-relaxed">
          {data[0]?.info}
        </p>
      </div>
      <div className="flex mt-14 gap-6 flex-wrap">
        {getClass.length <= 0 && (
          <div>
            <p className="text-lg">Coming Soon</p>
          </div>
        )}
        {getClass &&
          getClass.map((item, index) => <CardClass key={index} data={item} />)}
      </div>
    </div>
  );
}
