import Header from "./components/Header";
import bgImage from "./assets/background.jpg";

import CountUp from 'react-countup';
import GalleryPhoto from "./components/GalleryPhoto";
import Football from "./components/Football";
import Basketball from "./components/Basketball";
import Cricket from "./components/Cricket";
import Badminton from "./components/Badminton";
import Chess from "./components/Chess";
import Kabaddi from "./components/Kabaddi";
import Swimming from "./components/Swimming";
import VolleyBall from "./components/VolleyBall";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <main
    className="relative w-full min-h-screen bg-black bg-fixed bg-center bg-cover snap-y snap-mandatory"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
      <div className="relative z-10">

      <Header />
      
      {/* First Section - Full Screen */}
      <section className="text-[#92BB7E] w-full flex flex-col items-center gap-6 text-center h-screen justify-center mx-auto px-6 md:px-8 mt-50">
      
        <h1 className="saman neonText text-[#92BB7E] text-[88px] sm:text-[120px] md:text-[180px] lg:text-[230px] leading-none">
          prarambh
        </h1>
        <h1 className="saman neonTextDate text-[#92BB7E] text-[68px] sm:text-[90px] md:text-[120px] lg:text-[190px] leading-none animate-pulse">
          2025
        </h1>

        {/* Three items spaced correctly */}
        <div className="flex flex-col sm:flex-row max-w-[1100px] w-full justify-between text-white p-5 text-center sm:text-left">
          <p className="text-[30px] sm:text-[30px] robo">Feb 26-28</p>
          <p className="text-[18px] sm:text-[20px] robo">Live Stadium Festival</p>
          <p className="text-[18px] sm:text-[20px] robo">VSS Ground, VSSUT</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-center p-5 robo">
          <div>
            <p className="text-[20px] sm:text-[55px]">
              <CountUp end={600} duration={2} /> +
            </p>
            <p className="text-[18px] sm:text-[20px]">Registrations</p>
          </div>
          <div>
            <p className="text-[20px] sm:text-[55px]">6000+</p>
            <p className="text-[18px] sm:text-[20px]">Registrations</p>
          </div>
          <div>
            <p className="text-[20px] sm:text-[55px]">6000+</p>
            <p className="text-[18px] sm:text-[20px]">Registrations</p>
          </div>
          <div>
            <p className="text-[20px] sm:text-[55px]">6000+</p>
            <p className="text-[18px] sm:text-[20px]">Registrations</p>
          </div>
        </div>

        {/* Limited width for the paragraph */}
        <div className="max-w-[800px] w-full">
          <p className="text-[16px] sm:text-[20px] text-white text-wrap p-5 robo">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className="flex gap-4 sm:gap-8">
          <button className="bg-[#92BB7E] text-black robo outline border p-2 rounded-md hover:border-[#92BB7E] hover:text-[#92BB7E] hover:bg-black cursor-pointer">
            Register
          </button>
          <button className="text-[#92BB7E] robo outline border p-2 rounded-md hover:bg-[#92BB7E] hover:text-black cursor-pointer">
            Broucher
          </button>
        </div>

        
      </section>

      {/* ABOUT US */}
      <section className="w-full min-h-screen  flex flex-col items-center justify-center text-[#92BB7E]p-6 sm:p-10">
        <div className="">

          <h1 className="saman text-[#92BB7E] text-[60px] sm:text-[80px] leading-none mb-6 text-center">ABOUT US</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-[1200px] w-full gap-8 mt-6">
          <img src={bgImage} alt="About Us" className="w-[400px] md:w-[400px] lg:w-[500px] rounded-lg shadow-lg" />
          <p className="text-[16px] sm:text-[20px] robo max-w-[600px] text-center md:text-left text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section className="w-full min-h-screen  flex flex-col items-center text-[#92BB7E] p-6 sm:p-10">
        <h2 className="saman text-[#92BB7E] text-[40px] sm:text-[50px] leading-none mb-6 text-center">TOURNAMENTS</h2>

        <div className="flex flex-wrap gap-6 sm:gap-16 justify-center items-center w-full max-w-[1000px]">
          <Football />
          <Basketball />
          <Cricket />
          <Badminton />
          <Chess />
          <Kabaddi />
          <Swimming />
          <VolleyBall />
        </div>
      </section>

      {/* GALLERY */}
      <section className="w-full min-h-screen  flex flex-col items-center text-[#92BB7E] p-6 sm:p-10">
        <h2 className="saman text-[#92BB7E] text-[40px] sm:text-[50px] leading-none mb-6 text-center">GALLERY</h2>

        <div className="w-full max-w-[800px] h-[400px] sm:h-[500px] overflow-y-scroll custom-scrollbar border rounded-lg bg-black">
          <GalleryPhoto />
        </div>
      </section>

      {/* COORDINATORS */}
      <section className="w-full min-h-screen  flex flex-col items-center text-[#92BB7E] p-6 sm:p-10">
        <h2 className="saman text-[#92BB7E] text-[40px] sm:text-[50px] leading-none mb-6 text-center">COORDINATORS</h2>

        {/* Coordinator Cards Container */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center w-full max-w-[1200px] gap-15 mt-20">
          
          {/* Coordinator 1 */}
          <div className="flex flex-col items-center justify-center gap-5 max-w-[480px]">
            <img src="bg.jpg" alt="Coordinator 1" className="w-full max-w-[480px] h-[320px] shadow-lg object-cover rounded-lg animate-glow " />
            <div className="flex flex-col justify-center items-center">
              <p className="text-[16px] sm:text-[20px] robo">Coordinator 1 Name</p>
              <p className="text-[16px] sm:text-[20px] robo">Post</p>
            </div>
            <p className="text-[16px] sm:text-[20px] robo">Phone Number</p>
          </div>

          {/* Coordinator 2 */}
          <div className="flex flex-col items-center justify-center gap-5 max-w-[480px]">
            <img src="bg.jpg" alt="Coordinator 2" className="w-full max-w-[480px] h-[320px] shadow-lg object-cover rounded-lg animate-glow " />
            <div className="flex flex-col justify-center items-center">
              <p className="text-[16px] sm:text-[20px] robo">Coordinator 2 Name</p>
              <p className="text-[16px] sm:text-[20px] robo">Post</p>
            </div>
            <p className="text-[16px] sm:text-[20px] robo">Phone Number</p>
          </div>

        </div>
      </section>


      {/* CONTACT US */}
      <section className="w-full min-h-screen flex flex-col items-center text-[#92BB7E] p-6 sm:p-10">
        <h2 className="saman text-[#92BB7E] text-[40px] sm:text-[50px] leading-none mb-6 text-center">
          CONTACT US
        </h2>

        {/* Container for Contact Info + Map */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-10">

          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] shadow-xl rounded-lg border border-[#92BB7E]/50 overflow-hidden hover:shadow-green-400/50 transition-all duration-300">
              <iframe
                className="w-full h-full border-0 rounded-lg"
                src="https://maps.google.com/maps?q=Veer%20Surendra%20Sai%20University%20of%20Technology&t=p&z=14&ie=UTF8&iwloc=B&output=embed"
                allowFullScreen
                loading="lazy"
              />
            </div>
          
          
          <div className="w-full md:w-1/2 p-6 rounded-lg border border-transparent hover:border-[#92BB7E] hover:bg-[#92BB7E]/10 transition-all duration-300 shadow-lg">
            <h1 className="text-xl sm:text-[30px] font-bold  mb-4 saman text-[#92BB7E]">
              VEER SURENDRA SAI UNIVERSITY OF TECHNOLOGY
            </h1>
            <p className="text-lg text-gray-300 robo">📞 Phone: 0771-254-1234</p>
            <p className="text-lg text-gray-300 robo">📧 Email: 0771@vstut.ac.in</p>
            <p className="text-lg text-gray-300 robo">📍 Address: VSSUT, Sambalpur, India</p>
            <div className="bottom-5 right-0 flex gap-3 p-3 text-white ">
              <FaLinkedin className="hover:text-[#92BB7E] cursor-pointer hover:scale-160 size-6" />
              <FaWhatsapp className="hover:text-[#92BB7E] cursor-pointer hover:scale-160 size-6" />
              <FaFacebookF className="hover:text-[#92BB7E] cursor-pointer hover:scale-160 size-6" />
              
              
            
            </div>
          </div>

        </div>
      </section>


      {/* SPONSORS */}
      <section className="w-full min-h-screen flex flex-col items-center text-[#92BB7E] p-6 sm:p-10">
        <h2 className="saman text-[#92BB7E] text-[40px] sm:text-[50px] leading-none mb-6 text-center">SPONSORS</h2>
        
      </section>
      </div>
    
    </main>

  );
}

export default App;
