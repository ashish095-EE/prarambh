import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center top-0 left-0 p-4 w-full bg-black text-[#99d98c] fixed">
      {/* Logo */}
      <div>
        <h1 className="saman text-[25px]">prarambh</h1>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-between w-1/2 items-center text-[17px] pr-4">
        <p className="saman hover:border-b hover:border-red-500 cursor-pointer">ABOUT</p>
        <p className="saman hover:border-b hover:border-red-500 cursor-pointer">TOURNAMENTS</p>
        <p className="saman hover:border-b hover:border-red-500 cursor-pointer">CONTACT US</p>
        <p className="saman hover:border-b hover:border-red-500 cursor-pointer">GALLERY</p>
        <p className="saman hover:border-b hover:border-red-500 cursor-pointer">COORDINATORS</p>
        <button className="text-[#92BB7E] robo outline border p-2 rounded-md hover:bg-[#92BB7E] hover:text-black cursor-pointer">
          Register
        </button>
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
            <p className="saman hover:border-b hover:border-red-500 cursor-pointer" onClick={() => setIsOpen(false)}>ABOUT</p>
            <p className="saman hover:border-b hover:border-red-500 cursor-pointer" onClick={() => setIsOpen(false)}>TOURNAMENTS</p>
            <p className="saman hover:border-b hover:border-red-500 cursor-pointer" onClick={() => setIsOpen(false)}>CONTACT US</p>
            <p className="saman hover:border-b hover:border-red-500 cursor-pointer" onClick={() => setIsOpen(false)}>GALLERY</p>
            <p className="saman hover:border-b hover:border-red-500 cursor-pointer" onClick={() => setIsOpen(false)}>COORDINATORS</p>
            <button 
              className="saman outline border p-2 rounded-md hover:border-red-400 hover:bg-orange-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Register
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
