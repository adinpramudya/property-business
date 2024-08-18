import { Button } from "@nextui-org/button";
import { FC } from "react";
import CardBanner from "../CardBanner";
import { CardBannerData } from "@/index";
import Image from "next/image";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center block px-4 lg:px-0 pt-10 lg:pt-0">
      <Image
        className="lg:hidden rounded-md"
        src="/img/banner.png"
        width={920}
        height={814}
        alt="banner"
      />

      <div className="lg:pr-[80px] lg:pl-[130px] lg:w-1/2 w-full mt-5 lg:mt-0">
        <h1 className="text-4xl text-left">
          Discover Your Dream Property With Estatein
        </h1>
        <p className="text-base text-grey-shades-60 pt-6">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>
        <div className="flex flex-col lg:flex-row gap-3 pt-10">
          <Button variant="bordered" className="text-white">
            Learn More
          </Button>
          <Button className="bg-purple-shades-60 text-white">
            Browse Properties
          </Button>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row gap-1 box-border justify-between pt-10">
          {CardBannerData.map((item, index) => (
            <CardBanner
              className={`${
                index === 2 ? "w-full" : "w-[calc(50%-0.25rem)] lg:w-full"
              }`}
              key={index}
              count={item.count}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 hidden lg:mr-auto lg:block">
        <Image src="/img/banner.png" width={950} height={814} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
