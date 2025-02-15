import Header from "./components/Header";
import bgImage from "./assets/bg.jpg";
import SportsCards from "./components/SportsCards";
import CountUp from 'react-countup';
import GalleryPhoto from "./components/GalleryPhoto";

function App() {
  return (
    <main className="w-full min-h-screen bg-black absolute">
      <Header />
      
      {/* First Section - Full Screen */}
      <section className="flex flex-col items-center gap-6 max-w-[1200px] w-full text-center h-screen justify-center mx-auto px-6 md:px-8 mt-50">
        <h1 className="saman text-white text-[80px] sm:text-[120px] md:text-[180px] lg:text-[230px] leading-none">
          prarambh
        </h1>

        {/* Three items spaced correctly */}
        <div className="flex flex-col sm:flex-row max-w-[1100px] w-full justify-between text-white p-5 text-center sm:text-left">
          <p className="text-[18px] sm:text-[20px] robo">Feb 26-28</p>
          <p className="text-[18px] sm:text-[20px] robo">Live Stadium Festival</p>
          <p className="text-[18px] sm:text-[20px] robo">VSS Ground, VSSUT</p>
        </div>

        {/* Limited width for the paragraph */}
        <div className="max-w-[800px] w-full">
          <p className="text-[16px] sm:text-[20px] text-white text-wrap p-5 robo">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className="flex gap-4 sm:gap-8">
          <button className="robo outline border p-2 rounded-md hover:border-red-400 hover:bg-orange-600 cursor-pointer">
            Register
          </button>
          <button className="robo outline border p-2 rounded-md hover:border-red-400 hover:bg-orange-600 cursor-pointer">
            Broucher
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-center p-5">
          <div>
            <p className="text-[40px] sm:text-[55px]">
              <CountUp end={600} duration={2} /> +
            </p>
            <p className="text-[18px] sm:text-[20px]">Registrations</p>
          </div>
          <div>
            <p className="text-[40px] sm:text-[55px]">6000+</p>
            <p className="text-[18px] sm:text-[20px]">Registrations</p>
          </div>
          <div>
            <p className="text-[40px] sm:text-[55px]">6000+</p>
            <p className="text-[18px] sm:text-[20px]">Registrations</p>
          </div>
          <div>
            <p className="text-[40px] sm:text-[55px]">6000+</p>
            <p className="text-[18px] sm:text-[20px]">Registrations</p>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center text-white p-6 sm:p-10">
        <h2 className="saman text-white text-[40px] sm:text-[50px] leading-none mb-6 text-center">ABOUT US</h2>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-[1200px] w-full gap-8 mt-6">
          <img src={bgImage} alt="About Us" className="w-full md:w-[400px] lg:w-[500px] rounded-lg shadow-lg" />
          <p className="text-[16px] sm:text-[20px] robo max-w-[600px] text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section className="w-full min-h-screen bg-black flex flex-col items-center text-white p-6 sm:p-10">
        <h2 className="saman text-white text-[40px] sm:text-[50px] leading-none mb-6 text-center">TOURNAMENTS</h2>

        <div className="flex flex-wrap gap-6 sm:gap-16 justify-center items-center w-full max-w-[1000px]">
          <SportsCards />
          <SportsCards />
          <SportsCards />
          <SportsCards />
          <SportsCards />
          <SportsCards />
          <SportsCards />
          <SportsCards />
        </div>
      </section>

      {/* GALLERY */}
      <section className="w-full min-h-screen bg-black flex flex-col items-center text-white p-6 sm:p-10">
        <h2 className="saman text-white text-[40px] sm:text-[50px] leading-none mb-6 text-center">GALLERY</h2>

        <div className="w-full max-w-[800px] h-[400px] sm:h-[800px] overflow-y-scroll custom-scrollbar border">
          <GalleryPhoto />
        </div>
      </section>

      {/* COORDINATORS */}
      <section className="w-full min-h-screen bg-black flex flex-col items-center text-white p-6 sm:p-10">
        <h2 className="saman text-white text-[40px] sm:text-[50px] leading-none mb-6 text-center">COORDINATORS</h2>
      </section>

      {/* CONTACT US */}
      <section className="w-full min-h-screen bg-black flex flex-col items-center text-white p-6 sm:p-10">
        <h2 className="saman text-white text-[40px] sm:text-[50px] leading-none mb-6 text-center">CONTACT US</h2>
      </section>

      {/* SPONSORS */}
      <section className="w-full min-h-screen bg-black flex flex-col items-center text-white p-6 sm:p-10">
        <h2 className="saman text-white text-[40px] sm:text-[50px] leading-none mb-6 text-center">SPONSORS</h2>
      </section>
    </main>
  );
}

export default App;
