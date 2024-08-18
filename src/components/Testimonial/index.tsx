import { CardTestimonials } from "@/index";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { FC } from "react";
import CardTestimonial from "../CardTestimonial";

interface TestimonialProps {}

const Testimonial: FC<TestimonialProps> = ({}) => {
  return (
    <div className=" mx-auto lg:px-[130px] px-6 mt-10">
      <Image
        src="/icon/featured-properties-ic.svg"
        width={40}
        height={20}
        alt="icon"
      />
      <h1 className="font-bold text-2xl">What Our Clients Say</h1>
      <div className="flex justify-between items-center lg:pt-5 pt-2 gap-4">
        <p className="text-sm text-grey-shades-60">
          Read the success stories and heartfelt testimonials from our valued
          clients. Discover why they chose Estatein for their real estate needs.
        </p>
        <Button
          variant="bordered"
          className="border-grey-shades-15 border bg-grey-shades-10 text-white hidden lg:block w-[200px]"
        >
          View All Testimonial
        </Button>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        {CardTestimonials.map((item, index) => (
          <CardTestimonial
            description={item.description}
            title={item.title}
            rate={item.rate}
            descriptionUser=""
            imageUser=""
            name=""
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
