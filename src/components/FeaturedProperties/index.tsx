import { Button } from "@nextui-org/button";
import { FC } from "react";
import CardProperties from "../CardProperties";
import { CardFeaturedData } from "@/index";
import Image from "next/image";

interface FeaturedPropertiesProps {}

const FeaturedProperties: FC<FeaturedPropertiesProps> = ({}) => {
  return (
    <div className="mx-auto lg:px-[130px] px-6 mt-10">
      <Image
        src="/icon/featured-properties-ic.svg"
        width={40}
        height={20}
        alt="icon"
      />
      <h1 className="font-bold text-2xl">Featured Properties</h1>
      <div className="flex justify-between items-center lg:pt-5 pt-2 gap-4">
        <p className="text-sm text-grey-shades-60">
          Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein. Click &quot;View Details&quot; for more information.
        </p>
        <Button
          variant="bordered"
          className="border-grey-shades-15 border bg-grey-shades-10 text-white hidden lg:block w-[200px]"
        >
          View All Properties
        </Button>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        {CardFeaturedData.map((item, index) => (
          <CardProperties
            description={item.description}
            detail={item.detail}
            image={item.image}
            price={item.price}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
