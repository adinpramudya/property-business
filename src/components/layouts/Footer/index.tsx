import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import { FC } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaLocationArrow, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-[100px] p-6 lg:p-0">
      <div className="max-w-7xl mx-auto ">
        <div className="flex-col lg:flex-row flex justify-between">
          <div>
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <Image src="/img/logo.png" alt="logo" width={38} height={38} />
                <span className="ml-2 text-lg font-bold">Estatein</span>
              </a>
            </div>
            <Input
              type="email"
              label="Email"
              variant="bordered"
              placeholder="enter your email "
              labelPlacement="outside"
              startContent={
                <MdOutlineMailOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              endContent={<FaLocationArrow className="w-5 h-5 text-white" />}
            />
          </div>
          <div className="lg:mt-0 mt-6 flex flex-col items-start">
            <p className="text-grey-shades-60 text-lg mb-3">Home</p>
            <a href="#" className="mb-1 hover:underline">
              Hero Section
            </a>
            <a href="#" className="mb-1 hover:underline">
              Features
            </a>
            <a href="#" className="mb-1 hover:underline">
              Properties
            </a>
            <a href="#" className="mb-1 hover:underline">
              Testimonials
            </a>
            <a href="#" className="mb-1 hover:underline">
              FAQ&apos;s
            </a>
          </div>
          <div className="lg:mt-0 mt-6 flex flex-col items-start">
            <p className="text-grey-shades-60 text-lg mb-3">About Us</p>
            <a href="#" className="mb-1 hover:underline">
              Our Story
            </a>
            <a href="#" className="mb-1 hover:underline">
              Our Works
            </a>
            <a href="#" className="mb-1 hover:underline">
              How It Works
            </a>
            <a href="#" className="mb-1 hover:underline">
              Our Team
            </a>
            <a href="#" className="mb-1 hover:underline">
              Our Clients
            </a>
          </div>
          <div className="lg:mt-0 mt-6 flex flex-col items-start">
            <p className="text-grey-shades-60 text-lg mb-3">Properties</p>
            <a href="#" className="mb-1 hover:underline">
              Portfolio
            </a>
            <a href="#" className="mb-1 hover:underline">
              Categories
            </a>
          </div>
          <div className="lg:mt-0 mt-6 flex flex-col items-start">
            <p className="text-grey-shades-60 text-lg mb-3">Services</p>
            <a href="#" className="mb-1 hover:underline">
              Valuation Mastery
            </a>
            <a href="#" className="mb-1 hover:underline">
              Strategic Marketing
            </a>
            <a href="#" className="mb-1 hover:underline">
              Negotiation Wizardry
            </a>
            <a href="#" className="mb-1 hover:underline">
              Negotiation Wizardry
            </a>
            <a href="#" className="mb-1 hover:underline">
              Property Management
            </a>
          </div>
          <div className="lg:mt-0 mt-6 flex flex-col items-start">
            <p className="text-grey-shades-60 text-lg mb-3">Contact Us</p>
            <a href="#" className="mb-1 hover:underline">
              Contact Form
            </a>
            <a href="#" className="mb-1 hover:underline">
              Our Offices
            </a>
          </div>
        </div>
      </div>
      <div className=" bg-grey-shades-10 mt-[100px] hidden lg:block">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-[22px]">
            <p className="text-center text-white">
              &copy; Estatein 2023 Property Business. All rights reserved.
            </p>
            <div className=" gap-4 flex">
              <Tooltip content="Estatein" className="text-black">
                <Button
                  isIconOnly
                  radius="full"
                  className="bg-black border-none"
                  variant="faded"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-6 h-6 text-white p-1" />
                </Button>
              </Tooltip>
              <Tooltip content="Estatein" className="text-black">
                <Button
                  isIconOnly
                  radius="full"
                  className="bg-black border-none"
                  variant="faded"
                  aria-label="Linkedin"
                >
                  <BsLinkedin className="w-6 h-6 text-white p-1" />
                </Button>
              </Tooltip>
              <Tooltip content="Estatein" className="text-black">
                <Button
                  isIconOnly
                  radius="full"
                  className="bg-black border-none"
                  variant="faded"
                  aria-label="X"
                >
                  <FaXTwitter className="w-6 h-6 text-white p-1" />
                </Button>
              </Tooltip>
              <Tooltip content="Estatein" className="text-black">
                <Button
                  isIconOnly
                  radius="full"
                  className="bg-black border-none"
                  variant="faded"
                  aria-label="Youtube"
                >
                  <FaYoutube className="w-6 h-6 text-white p-1" />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
