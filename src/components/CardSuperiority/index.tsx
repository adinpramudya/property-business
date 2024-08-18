import Image from "next/image";
import { FC } from "react";
import { MdArrowOutward } from "react-icons/md";

interface CardSuperiorityProps {
  title: string;
  icon: string;
}

const CardSuperiority: FC<CardSuperiorityProps> = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-grey-shades-10 rounded-lg w-[168px]  max-[392px]:w-full lg:w-full relative">
      <MdArrowOutward className="absolute top-2 right-2 text-grey-shades-60 w-6 h-6" />
      <Image src={icon} width={82} height={82} alt={title} />
      <p className="text-sm font-bold pt-5">{title}</p>
    </div>
  );
};

export default CardSuperiority;
