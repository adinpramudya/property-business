import { FC } from "react";

interface CardBannerProps {
  count: string;
  description: string;
}

const CardBanner: FC<CardBannerProps> = ({ count, description }) => {
  return (
    <div className="py-4 px-6 bg-grey-shades-10 rounded-md lg:mr-3 lg:mb-0 mb-5">
      <h1 className="text-2xl">{count}+</h1>
      <p className="text-grey-shades-60">{description}</p>
    </div>
  );
};
export default CardBanner;
