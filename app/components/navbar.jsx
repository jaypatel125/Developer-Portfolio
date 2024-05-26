// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent z-[999999] top-0 sticky shadow-md backdrop-blur-sm rounded-md rounded-tl-none rounded-tr-none px-2">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#af69ffc0] text-3xl font-bold">
            JP
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#bc32bc]">
                ABOUT
              </div>
            </Link>
          </li>

          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#bc32bc]">
                SKILLS
              </div>
            </Link>
          </li>

          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#bc32bc]">
                PROJECTS
              </div>
            </Link>
          </li>

          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#experience"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#bc32bc]">
                EXPERIENCE
              </div>
            </Link>
          </li>

          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#education"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#bc32bc]">
                EDUCATION
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
