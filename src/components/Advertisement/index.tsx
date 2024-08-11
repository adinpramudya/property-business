"use client";
import { Button } from "@nextui-org/button";
import React, { FC, useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface AdvertisementProps {}

const Advertisement: FC<AdvertisementProps> = ({}) => {
  const [showAdvertisement, setShowAdvertisement] = useState<boolean>(true);

  const handleCloseAdvertisement = () => {
    setShowAdvertisement(false);
  };

  useEffect(() => {
    const storedShowAdvertisement = sessionStorage.getItem("showAdvertisement");
    if (storedShowAdvertisement !== null) {
      setShowAdvertisement(storedShowAdvertisement === "true");
    }
  }, []);

  useEffect(() => {
    if (!showAdvertisement) {
      sessionStorage.setItem("showAdvertisement", showAdvertisement.toString());
    }
  }, [showAdvertisement]);

  if (!showAdvertisement) {
    return null;
  }

  return (
    <div className="flex justify-center items-center py-3 bg-grey-shades-10 bg-img-advertisement">
      <div className="container text-center flex justify-center items-center">
        <h1>
          ✨ Discover Your Dream Property with Estatein
          <a href="#" className="ml-2 underline font-semibold">
            Learn More
          </a>
        </h1>
      </div>
      <Button
        isIconOnly
        variant="faded"
        onClick={handleCloseAdvertisement}
        className="bg-transparent border-none text-white flex justify-end-end"
        aria-label="close-advertisement"
      >
        <IoCloseCircleOutline className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Advertisement;
