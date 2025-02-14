

function Header() {
  return (
    <div className="flex flex-row justify-between p-4 top-2">
        <div className="">
            <h1 className="saman text-[25px]">prarambh</h1>
        </div>
        <div className="flex flex-row justify-between w-1/2 items-center text-[17px] pr-4">
            <p className="saman hover:border-b hover:border-red-500 "> ABOUT</p>
            <p className="saman hover:border-b hover:border-red-500"> TOURNAMENTS</p>
            <p className="saman hover:border-b hover:border-red-500"> CONTACT US</p>
            <p className="saman hover:border-b hover:border-red-500"> GALLERY</p>
            <p className="saman hover:border-b hover:border-red-500">COORDINATORS</p>
            <button className="saman outline border p-2 rounded-md hover:border-red-400 hover:bg-orange-600 cursor-pointer">Register</button>
        </div>
      
    </div>
  )
}

export default Header
