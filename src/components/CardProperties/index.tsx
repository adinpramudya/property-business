import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import { FC } from "react";
import { FaBath, FaRegBuilding } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";

interface PropertyDetails {
  bedroom: number;
  bathroom: number;
  isVilla: boolean;
}
interface CardPropertiesProps {
  image: string;
  title: string;
  description: string;
  price: number;
  detail: PropertyDetails;
}

const CardProperties: FC<CardPropertiesProps> = ({
  image,
  title,
  description,
  detail,
  price,
}) => {
  return (
    <div className="border border-grey-shades-15 p-8 rounded-md mt-10">
      <div className="flex flex-col">
        <Image
          className="w-full rounded-md object-cover"
          src={image}
          alt={title}
          width={432}
          height={318}
        />
        <h1 className="font-bold text-lg my-2">{title}</h1>
        <p className="font-sm text-grey-shades-60">{description}</p>
        <div className="flex justify-between mt-4">
          <Chip
            className="text-sm text-white bg-grey-shades-10 border border-grey-shades-15"
            startContent={<IoBedOutline size={18} />}
            variant="faded"
          >
            {detail.bedroom} - Bedroom
          </Chip>
          <Chip
            className="text-sm text-white bg-grey-shades-10 border border-grey-shades-15"
            startContent={<FaBath size={18} />}
            variant="faded"
          >
            {detail.bathroom} - Bathroom
          </Chip>
          <Chip
            className={`text-xs bg-grey-shades-10 border border-grey-shades-15 text-white ${detail.isVilla} ? "block" : "hidden"`}
            startContent={<FaRegBuilding size={18} />}
            variant="faded"
          >
            Villa
          </Chip>
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex flex-col">
            <p className="font-semibold text-sm  bg-transparent mb-1 text-grey-shades-60">
              Price
            </p>
            <p className="font-bold"> $ {price}</p>
          </div>
          <Button className="bg-purple-shades-60 text-white px-4 py-2 rounded-md font-medium">
            View Properties Details
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CardProperties;
