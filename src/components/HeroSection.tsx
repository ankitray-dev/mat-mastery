"use client"
import {Button} from "@nextui-org/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-10 blur-sm"
        style={{
          backgroundImage: "url('/hero-image.jpg')",
        }}
      >
      </div>
      <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-600">
                  Unleash Your True Potential
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-200 max-w-lg mx-auto">
          Discover expert instruction, a supportive community, and a path to mastering strength both on and off the mat. Unleash your potential with us and embark on your journey to martial arts mastery.
          </p>
          <div className="mt-4">
            <Button size="lg" radius="full" className="bg-gradient-to-tr from-blue-800 to-blue-400 text-neutral-200 shadow-lg">
              Start Your Journey
            </Button>
          </div>
      </div>
    </section>
  )
}

export default HeroSection
