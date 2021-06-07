export default function Footer() {
  return (
    <footer className="p-3 pt-32 lg:pl-24  w-full">
      <nav className="w-full flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-between gap-6">
        <a
          href="/"
          className="flex  lg:flex-row flex-col lg:items-center text-center lg:text-left space-x-2 space-y-2"
        >
          <div className="flex items-center justify-center">
            <img src="/images/logo.svg" alt="Alf;" width={50} />
          </div>
          <div className="flex flex-col">
            <p className="text-base pl-2 font-medium">
              Website untuk belajar dan membangun <br /> portfolio sebagai
              Developer handal.
            </p>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} Eduify by Alfredo Patricius Tarigan
            </p>
          </div>
        </a>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center lg:text-left lg:pr-6 items-start  ">
          <div className="w-full pt-0">
            <p className="text-base font-medium ">Our Products</p>

            <ul>
              <li className="py-1 md:text-sm text-base leading-relaxed">
                <a
                  href="#"
                  className="hover:text-blue-600 duration-150 ease-in-out"
                >
                  Courses
                </a>
              </li>
              <li className="py-1 md:text-sm text-base leading-relaxed">
                <a
                  href="#"
                  className="hover:text-blue-600 duration-150 ease-in-out"
                >
                  Articles
                </a>
              </li>
              <li className="py-1 md:text-sm text-base leading-relaxed">
                <a
                  href="#"
                  className="hover:text-blue-600 duration-150 ease-in-out"
                >
                  Our Mentors
                </a>
              </li>
              <li className="py-1 md:text-sm text-base leading-relaxed">
                <a
                  href="#"
                  className="hover:text-blue-600 duration-150 ease-in-out"
                >
                  Roadmaps
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <p className="text-base font-medium ">Office</p>
            <ul>
              <li className="py-1 md:text-sm text-base leading-relaxed">
                <a
                  href="#"
                  className="hover:text-blue-600 duration-150 ease-in-out"
                >
                  Edufiy Indonesia
                </a>
              </li>
              <li className="py-1 md:text-sm text-base leading-relaxed">
                <a
                  href="#"
                  className="hover:text-blue-600 duration-150 ease-in-out"
                >
                  Jl Kyaro Town Gregminister <br /> No. 10B
                </a>
              </li>
              <li className="py-1 md:text-sm text-base leading-relaxed">
                <a
                  href="#"
                  className="hover:text-blue-600 duration-150 ease-in-out"
                >
                  Medan, Indonesia
                </a>
              </li>
              <li className="py-1 md:text-sm text-base leading-relaxed">
                <a
                  href="#"
                  className="hover:text-blue-600 duration-150 ease-in-out"
                >
                  (081) 65432100
                </a>
              </li>
              <li className="py-1 md:text-sm text-base leading-relaxed">
                <a
                  href="#"
                  className="hover:text-blue-600 duration-150 ease-in-out"
                >
                  alfredo@alfredo.id
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="text-center pt-10">
        Made with ♥ by Alfredo Patricius Tarigan
      </div>
    </footer>
  );
}
