import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-6 md:mx-16 lg:mx-32 xl:mx-56 gap-6 md:gap-9 lg:gap-10">
      <h1 className="text-center font-bold mt-16 text-3xl md:text-5xl">
        <span className="text-[#3dcea3]">
          Discover Your Next Adventure with AI:
        </span>
        <span className="block">
          Personalize Itineraries at Your Fingertips
        </span>
      </h1>

      <p className="text-md md:text-xl text-gray-500 text-center mb-5">
        Your personal trip planner and travel curator, creating the custom
        itineraries tailored to your interests and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button
          variant="default"
          size="lg"
          className="rounded-full md:w-[150px] md:text-lg"
        >
          Get Started!
        </Button>
      </Link>

      <img
        src="/landing.jpg"
        alt="hero"
        className="w-auto h-auto mt-16 mb-32 md:mt-24 md:mb-40 lg:mt-28 lg:mb-48"
      />
    </div>
  );
}

export default Hero;
