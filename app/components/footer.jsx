import Link from "next/link";

function Footer() {
  return (
    <div className="border-t bg-[#090d19] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex md:flex-row items-center justify-between">
          <p>
            © Developed and designed by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/jay-patel-1507aa261"
              className="text-[#e0c0ff] underline hover:text-[#bc32bc] transition-colors duration-300"
            >
              Jay Patel
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
