import Banner from "@/components/Banner";
import CardSuperiority from "@/components/CardSuperiority";
import Image from "next/image";
import { CardSuperiorityData } from "..";
import FeaturedProperties from "@/components/FeaturedProperties";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="lg:flex-row flex-wrap lg:flex-nowrap flex justify-between gap-5 lg:p-10 px-6 mt-12 lg:mt-0">
        {CardSuperiorityData.map((item, index) => (
          <CardSuperiority icon={item.icon} title={item.title} key={index} />
        ))}
      </div>
      {/* <FeaturedProperties /> */}
    </div>
  );
}
