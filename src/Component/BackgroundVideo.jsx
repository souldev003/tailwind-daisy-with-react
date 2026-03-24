import React from "react";
import videoBg from "../assets/Galaxy-kitsune.mp4";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-height-full max-w-none object-cover h-full"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
        <div className="text-center text-white p-5">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to{" "}
            <span className="text-red-500 font-bold underline decoration-amber-300">
              Celestial
            </span>
          </h1>
          <p className="mb-6">Galaxy Kitsune</p>
          <button className="btn btn-primary">Get Started</button>{" "}
          {/* DaisyUI Button */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
