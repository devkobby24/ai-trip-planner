import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#3dce86]">
          Discover Your Next Adventure with AI:
        </span>
        Personalize Itineraries at Your Fingertips
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
        className="w-full h-full mt-20 mb-40"
      />
    </div>
  )
}

export default Hero;
