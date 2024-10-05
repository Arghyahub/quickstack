import React, { useEffect } from "react";
import BackgroundImage from "@/public/background.jpg";
import Image from "next/image";
import HomeBtn from "./(home)/home-btns";

type Props = {};

const NAME_OF_PROJECT = "Name of Project";
const CTA = "(Call To Action)";

const Home = (props: Props) => {
  return (
    <div className="w-full h-[100svh]">
      <div className="flex flex-col justify-center items-center w-full h-full gap-3">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <h1 className="font-normal md:hidden">{NAME_OF_PROJECT}</h1>
          <p className=" md:hidden ">CTA {CTA}</p>
          <Image
            src={BackgroundImage}
            alt="Background Image"
            className="w-[300px] h-[190px] sm:w-[360px] sm:h-[240px]  md:w-[400px] md:h-[300px]  min-[930px]:w-[600px] min-[930px]:h-[400px]"
          />
          <div className="">
            <h1 className="font-normal hidden md:flex">{NAME_OF_PROJECT}</h1>
            <p className="hidden md:flex">CTA {CTA}</p>
            <HomeBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
