import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-30 flex justify-between items-center top-0 left-0 p-2 w-full bg-black text-[#bbcf47] fixed">
      {/* Logo */}
      <div>
        <img src="vssutPlogo.png" alt="logo" className="size-20" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-between w-1/2 items-center text-[20px] pr-4">
        <a href="#about" className="saman hover:border-b hover:border-red-500 cursor-pointer">ABOUT</a>
        <a href="#tournament" className="saman hover:border-b hover:border-red-500 cursor-pointer">TOURNAMENTS</a>
        <a href="#contact" className="saman hover:border-b hover:border-red-500 cursor-pointer">CONTACT US</a>
        <a href="#gallery" className="saman hover:border-b hover:border-red-500 cursor-pointer">GALLERY</a>
        <a href="#coordiantors" className="saman hover:border-b hover:border-red-500 cursor-pointer">COORDINATORS</a>
        <a href="">

          <button className="text-[#bbcf47] saman outline border border-[#bbcf47] p-2 rounded-md hover:bg-[#bbcf47] hover:text-black cursor-pointer">
            Register
          </button>
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-white text-3xl" onClick={() => setIsOpen(true)}>
        <FiMenu />
      </button>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          {/* Close Button */}
          <button className="absolute top-6 right-6 text-white text-3xl" onClick={() => setIsOpen(false)}>
            <FiX />
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col gap-6 text-[20px]">
            <a href="#about" className="saman hover:border-b hover:border-red-500 cursor-pointer" onClick={() => setIsOpen(false)}>ABOUT</a>
            <a href="#tournament" className="saman hover:border-b hover:border-red-500 cursor-pointer" onClick={() => setIsOpen(false)}>TOURNAMENTS</a>
            <a href="#contact" className="saman hover:border-b hover:border-red-500 cursor-pointer" onClick={() => setIsOpen(false)}>CONTACT US</a>
            <a href="#gallery" className="saman hover:border-b hover:border-red-500 cursor-pointer" onClick={() => setIsOpen(false)}>GALLERY</a>
            <a href="#coordiantors" className="saman hover:border-b hover:border-red-500 cursor-pointer" onClick={() => setIsOpen(false)}>COORDINATORS</a>
            <a href="">

              <button 
                className="saman outline border p-2 rounded-md hover:border-[#bbcf47] hover:bg-[#bbcf47] hover:text-black cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
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
