import Header from "./components/Header";
import bgImage from "./assets/bg.jpg";
import SportsCards from "./components/SportsCards";

function App() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Header />
      
      {/* First Section - Full Screen */}
      <section className="flex flex-col items-center gap-6 max-w-[1200px] w-full text-center h-screen justify-center mx-auto px-8 mt-10">
        <h1 className="saman text-white text-[230px] leading-none">prarambh</h1>

        {/* Three items spaced correctly */}
        <div className="flex max-w-[1100px] w-full justify-between text-white p-5">
          <p className="text-[20px] robo">Feb 26-28</p>
          <p className="text-[20px] robo">Live Stadium Festival</p>
          <p className="text-[20px] robo">VSS Ground, VSSUT</p>
        </div>

        {/* Limited width for the paragraph */}
        <div className="max-w-[800px] w-full">
          <p className="text-[20px] text-white text-wrap p-5 robo">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled.
          </p>
        </div>

        <div className="flex gap-8">
          <button className="robo outline border p-2 rounded-md hover:border-red-400 hover:bg-orange-600 cursor-pointer">
            Register
          </button>
          <button className="robo outline border p-2 rounded-md hover:border-red-400 hover:bg-orange-600 cursor-pointer">
            Broucher
          </button>
        </div>

        <div className="flex max-w-[1200px] w-full justify-between p-5">
          <div>
            <p className="text-[55px]">600+</p>
            <p className="text-[20px]"> Registrations</p>
          </div>
          <div>
            <p className="text-[55px]">6000+</p>
            <p className="text-[20px]"> Registrations</p>
          </div>
          <div>
            <p className="text-[55px]">6000+</p>
            <p className="text-[20px]"> Registrations</p>
          </div>
          <div>
            <p className="text-[55px]">6000+</p>
            <p className="text-[20px]"> Registrations</p>
          </div>
          
          
          
        </div>
      </section>

      {/* Scrollable Next Section */}
      {/* Scrollable Next Section */}
        <section className="w-full h-screen bg-black flex flex-col items-center justify-center text-white p-10">
          <h2 className="saman text-white text-[50px] leading-none mb-8 text-center">ABOUT US</h2>

          {/* Centered Image & Text */}
          <div className="flex flex-col md:flex-row items-center justify-center max-w-[1200px] w-full gap-8 mt-12">
            {/* Image */}
            <img src={bgImage} alt="About Us" className="w-full md:w-[500px] rounded-lg shadow-lg" />

            {/* Text */}
            <p className="text-[20px] robo max-w-[600px] text-center md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the standard dummy text ever since the 1500s, when an 
              unknown printer took a galley of type and scrambled.
            </p>
          </div>
        </section>

        {/* TOURNAMENT SECTION */}

        <section className="w-full h-screen bg-black items-center justify-center flex flex-col text-white p-10">
          <h2 className="saman text-white text-[50px] leading-none mb-8 text-center"> TOURNAMENTS</h2>
          
          <div className="flex flex-wrap gap-16 justify-center items-center w-[1000px]">
            <SportsCards/>
            <SportsCards/>
            <SportsCards/>
            <SportsCards/>
            <SportsCards/>
            <SportsCards/>
            <SportsCards/>
            <SportsCards/>
            


          </div>

          
        </section>
        {/* GALLERY */}

        <section className="w-full h-screen bg-black flex flex-col items-center justify-center text-white p-10">
          <h2 className="saman text-white text-[50px] leading-none mb-8 text-center"> GALLERY</h2>

          
        </section>

          {/* COORDINATORS */}

        <section className="w-full h-screen bg-black flex flex-col items-center justify-center text-white p-10">
          <h2 className="saman text-white text-[50px] leading-none mb-8 text-center">COORDINATORS</h2>

          
        </section>

          {/* CONTACT US */}


        <section className="w-full h-screen bg-black flex flex-col items-center justify-center text-white p-10">
          <h2 className="saman text-white text-[50px] leading-none mb-8 text-center">CONTACT US</h2>

          
        </section>


        <section className="w-full h-screen bg-black flex flex-col items-center justify-center text-white p-10">
          <h2 className="saman text-white text-[50px] leading-none mb-8 text-center">SPONSORS</h2>

          
        </section>

    </main>
  );
}

export default App;
