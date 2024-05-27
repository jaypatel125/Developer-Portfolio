// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative pt-20">
      <div className="hidden lg:flex flex-col items-center absolute mt-[4rem] top-20 -right-8">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-7 right-20 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <span className="bg-gradient-to-r to-blue-800 from-violet-900 w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-40 w-[2px] bg-blue-900"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#e0c0ff] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-300 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Jay Patel"
            className="rounded-lg transition-all duration-1000 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
