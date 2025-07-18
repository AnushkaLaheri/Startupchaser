// app/components/HeroSection.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import findjob_man from "../../public/findjob-man.jpg";
import hero_man from "../../public/hero_man.webp";
import findjob_woman from "../../public/findjob-woman.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <section className="bg-background text-foreground min-h-[90vh] flex flex-col items-center px-4 md:px-16 relative py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full animate-fade-in">
        {/* Left Content */}
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Get that Industrial <br /> Experience
          </h1>
          <p className="text-lg text-muted-foreground">
            Unlock your productivity potential with our intuitive and powerful
            project categories. Get real-world experience working on real-time
            data guided by industry mentors.
          </p>

          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-xs"
            />
            <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">
              Get a demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            We care about your data in our{" "}
            <a href="#" className="underline">
              privacy policy
            </a>
            .
          </p>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex -space-x-2">
              <Image
                src={findjob_woman}
                alt="user1"
                width={42}
                height={42}
                className="rounded-full border-2 border-white"
              />
              <Image
                src={findjob_man}
                alt="user2"
                width={42}
                height={42}
                className="rounded-full border-2 border-white"
              />
              <Image
                src={findjob_woman}
                alt="user3"
                width={42}
                height={42}
                className="rounded-full border-2 border-white"
              />
            </div>
            <div className="text-sm">
              <FontAwesomeIcon icon={faStar} /> 5.0 <br />
              <span className="text-muted-foreground">
                Based on 200+ reviews
              </span>
            </div>
          </div>
        </div>

        {/* Right Image & UI Mockup */}
        <div className="relative w-[600px] h-[600px]">
          <Image
            src={hero_man}
            alt="Hero person"
            width={600}
            className="rounded-xl object-cover"
          />

          {/* Floating card */}
          <div className="absolute top-16 left-[-70px] bg-white dark:bg-muted p-6 rounded-xl shadow-md w-[200px]">
            <div className="font-semibold text-sm text-muted-foreground mb-2">
              Search companies..
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between items-center">
                <span>TCS</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Infosys</span>
                {/* <span></span> */}
              </li>
              <li className="flex justify-between items-center">
                <span>IBM</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Google</span>
              </li>
            </ul>
            <Button className="w-full mt-4">Log in</Button>
          </div>

          {/* Floating username card */}
          <div className="absolute bottom-6 right-6 bg-white dark:bg-muted p-3 rounded-xl shadow-md flex items-center gap-3">
            <Image
              src={findjob_woman}
              alt="user"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-xs text-muted-foreground">Username</p>
              <p className="font-medium text-sm">James Doe</p>
            </div>
          </div>
        </div>

        {/* Trusted by Companies */}
        
      </div>
      <div className="mt-20 text-center w-full">
          <h2 className="text-4xl md:text-4xl font-semibold mb-8">
            14,000+ customers large and small rely on us for trust &
            transformation
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground text-xl">
            <span>Google</span>
            <span>Microsoft</span>
            <span>Amazon</span>
            <span>TCS</span>
            <span>Infosys</span>
            <span>Wipro</span>
            <span>IBM</span>
          </div>
        </div>
    </section>
  );
}
