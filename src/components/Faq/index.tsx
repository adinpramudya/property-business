import { Faqs } from "@/index";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { FC } from "react";
import CardFaq from "../CardFaq";

interface FaqProps {}

const Faq: FC<FaqProps> = ({}) => {
  return (
    <div className=" mx-auto lg:px-[130px] px-6 mt-10">
      <Image
        src="/icon/featured-properties-ic.svg"
        width={40}
        height={20}
        alt="icon"
      />
      <h1 className="font-bold text-2xl">Frequently Asked Questions</h1>
      <div className="flex justify-between items-center lg:pt-5 pt-2 gap-4">
        <p className="text-sm text-grey-shades-60">
          Find answers to common questions about Estatein&quot;s services,
          property listings, and the real estate process. We&quot;re here to
          provide clarity and assist you every step of the way.
        </p>
        <Button
          variant="bordered"
          className="border-grey-shades-15 border bg-grey-shades-10 text-white hidden lg:block w-[200px]"
        >
          View All FAQ&quot;s
        </Button>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        {Faqs.map((item, index) => (
          <CardFaq
            answer={item.answer}
            question={item.question}
            detailId={item.detailId}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
