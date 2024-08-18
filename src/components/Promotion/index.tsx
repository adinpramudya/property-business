import { Button } from "@nextui-org/button";
import { FC } from "react";

interface PromotionProps {}

const Promotion: FC<PromotionProps> = ({}) => {
  return (
    <div className="bg-img-promotion bg-cover">
      <div className=" mx-auto lg:px-[130px] px-6 mt-10 py-[100px]">
        <div className="flex items-center flex-col lg:flex-row">
          <div className="mr-auto lg:w-1/2 w-full">
            <h1 className="text-3xl text-left">
              Start Your Real Estate Journey Today
            </h1>
            <p className="text-base text-grey-shades-60 text-justify mt-3 lg:mt-0 lg:text-left">
              Your dream property is just a click away. Whether you&quot;re
              looking for a new home, a strategic investment, or expert real
              estate advice, Estatein is here to assist you every step of the
              way. Take the first step towards your real estate goals and
              explore our available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <Button className="bg-purple-shades-60 text-white mt-5 lg:mt-0 px-4 py-2 rounded-md font-medium w-full lg:w-1/4">
            Explore Properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
