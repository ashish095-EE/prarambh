import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-30 flex justify-between items-center top-0 left-0 p-4 w-full bg-black  text-[#bbcf47] fixed">
      {/* Logo */}
      <div>
        <a href="#home">
          <img src="vssutPlogo.png" alt="logo" className="w-12 md:w-20 hover:scale-105 transition-transform fixed left-4" />
        </a>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-between w-2/3 lg:w-1/2 items-center text-[12px] lg:text-[15px] pr-4">
        <a href="#about" className="saman hover:border-b hover:border-red-500 cursor-pointer">ABOUT</a>
        <a href="#tournament" className="saman hover:border-b hover:border-red-500 cursor-pointer">TOURNAMENTS</a>
        <a href="#contact" className="saman hover:border-b hover:border-red-500 cursor-pointer">CONTACT US</a>
        <a href="#gallery" className="saman hover:border-b hover:border-red-500 cursor-pointer">GALLERY</a>
        <a href="#coordinators" className="saman hover:border-b hover:border-red-500 cursor-pointer">COORDINATORS</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSerAqd7Muqlit5KUMnwgdiyWtDRL1ys_OG0KxOB10x692pxvw/viewform">
          <button className="text-[#bbcf47] saman outline border border-[#bbcf47] px-3 py-2 rounded-md hover:bg-[#bbcf47] hover:text-black cursor-pointer">
            Register
          </button>
        </a>
      </nav>

      {/* College Logo */}
      <div>
        <a href="https://www.vssut.ac.in/">
          <img src="collegelogo.png" alt="college logo" className="w-10 md:w-16 hover:scale-105 transition-transform" />
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-white text-3xl" onClick={() => setIsOpen(true)}>
        <FiMenu />
      </button>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 transition-all duration-300">
          {/* Close Button */}
          <button className="absolute top-6 right-6 text-white text-3xl" onClick={() => setIsOpen(false)}>
            <FiX />
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col gap-6 text-[22px] text-white">
            <a href="#about" className="saman hover:text-[#bbcf47]" onClick={() => setIsOpen(false)}>ABOUT</a>
            <a href="#tournament" className="saman hover:text-[#bbcf47]" onClick={() => setIsOpen(false)}>TOURNAMENTS</a>
            <a href="#contact" className="saman hover:text-[#bbcf47]" onClick={() => setIsOpen(false)}>CONTACT US</a>
            <a href="#gallery" className="saman hover:text-[#bbcf47]" onClick={() => setIsOpen(false)}>GALLERY</a>
            <a href="#coordinators" className="saman hover:text-[#bbcf47]" onClick={() => setIsOpen(false)}>COORDINATORS</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSerAqd7Muqlit5KUMnwgdiyWtDRL1ys_OG0KxOB10x692pxvw/viewform">
              <button className="saman outline border border-[#bbcf47] px-4 py-2 rounded-md hover:bg-[#bbcf47] hover:text-black cursor-pointer" onClick={() => setIsOpen(false)}>
                Register
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;