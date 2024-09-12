import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-56 gap-6 sm:gap-8 md:gap-9 lg:gap-10">
      <h1 className="text-center font-extrabold mt-16 px-4 sm:px-6 md:px-8 lg:px-12 text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px]">
        <span className="text-[#3dce86] block text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
          Discover Your Next Adventure with AI:
        </span>
        <span className="block text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]">
          Personalize Itineraries at Your Fingertips
        </span>
      </h1>

      <p className="text-xl text-gray-500 text-center">
        Your personal trip planner and travel curator, creating the custom
        itineraries tailored to your interests and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started, It's Free!</Button>
      </Link>

      <img
        src="/landing.jpg"
        alt="hero"
        className="w-full h-auto mt-16 mb-32 sm:mt-20 sm:mb-36 md:mt-24 md:mb-40 lg:mt-28 lg:mb-48"
      />
    </div>
  );
}

export default Hero;
