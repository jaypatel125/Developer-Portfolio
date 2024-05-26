// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-10 lg:my-10 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-19 -right-8">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-7 right-20 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <span className="bg-gradient-to-r to-blue-800 from-violet-900 w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-blue-800"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#2e2b59] p-2 rounded-full hover:bg-[#9073ac] hover:scale-110 transition-all duration-300 text-gray-400 cursor-pointer"
                size={36}
              />
              <a
                href={`mailto:${personalData.email}`}
                className="text-[#e0c0ff] underline hover:text-[#bc32bc] transition-colors duration-300"
              >
                {personalData.email}
              </a>
            </p>

            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#2e2b59] p-2 rounded-full hover:bg-[#9073ac] hover:scale-110 transition-all duration-300 text-gray-400 cursor-pointer"
                size={36}
              />
              <span className="text-[#e0c0ff]">{personalData.address}</span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#2e2b59] p-3 rounded-full hover:bg-[#9073ac] hover:scale-110 transition-all duration-300 text-gray-400 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#2e2b54] p-3 rounded-full hover:bg-[#9073ac] hover:scale-110 transition-all duration-300 text-gray-400 cursor-pointer"
                size={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
