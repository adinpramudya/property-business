import { Button } from "@nextui-org/button";
import { FC } from "react";
import CardProperties from "../CardProperties";
import { CardFeaturedData } from "@/index";

interface FeaturedPropertiesProps {}

const FeaturedProperties: FC<FeaturedPropertiesProps> = ({}) => {
  return (
    <div className="max-w-7xl mx-auto lg:px-8">
      <h1 className="font-bold text-lg">Featured Properties</h1>
      <div className="flex justify-between items-center pt-5 gap-4">
        <p className="text-sm text-grey-shades-60">
          Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein. Click &quot;View Details&quot; for more information.
        </p>
        <Button
          variant="bordered"
          className="border-grey-shades-15 border bg-grey-shades-10 text-white"
        >
          View All Properties
        </Button>
      </div>
      <div className="flex justify-between gap-5">
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
