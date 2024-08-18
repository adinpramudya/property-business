"use client";
import { User } from "@nextui-org/user";
import { FC } from "react";
import ReactStars from "react-stars";
interface CardTestimonialProps {
  title: string;
  description: string;
  imageUser: string;
  rate: number;
  name: string;
  descriptionUser: string;
}

const CardTestimonial: FC<CardTestimonialProps> = ({
  title,
  description,
  rate,
  imageUser,
  name,
  descriptionUser,
}) => {
  return (
    <div className="border border-grey-shades-15 p-8 rounded-md mt-10 w-full lg:max-w-[390px]">
      <div className="flex flex-col">
        <ReactStars
          count={5}
          size={24}
          color2={"#ffd700"}
          value={rate}
          edit={false}
        />
        <h1 className="font-bold text-lg my-2">{title}</h1>
        <p className="font-sm text-grey-shades-60">{description}</p>
        <User
          className="mt-3 mr-auto"
          name="Jane Doe"
          description="Product Designer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
      </div>
    </div>
  );
};

export default CardTestimonial;
