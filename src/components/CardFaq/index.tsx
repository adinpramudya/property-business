import { Button } from "@nextui-org/button";
import { FC } from "react";

interface CardFaqProps {
  question: string;
  answer: string;
  detailId: number;
  // Add any other props you need here  (e.g., icon, etc.)
}

const CardFaq: FC<CardFaqProps> = ({ question, answer, detailId }) => {
  return (
    <div className="border border-grey-shades-15 p-8 rounded-md mt-10 w-full lg:max-w-[390px]">
      <h1 className="font-bold text-lg my-2">{question}</h1>
      <p className="font-sm text-grey-shades-60">{answer}</p>
      <Button
        variant="bordered"
        className="border-grey-shades-15 border bg-grey-shades-10 text-white mt-4"
      >
        Read More
      </Button>
    </div>
  );
};

export default CardFaq;
