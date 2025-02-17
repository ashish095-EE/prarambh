import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

function Cricket() {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickDownload = () => {
    fetch("Cricket.pdf").then((response) => {
      response.blob().then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Cricket.pdf";
        a.click();
      });
    });
  };

  return (
    <div onClick={() => setModalOpen(true)} className="hover:shadow-xl hover:scale-105 h-60 w-60 border-4 animate-border-blink flex flex-col justify-center items-center rounded-2xl bg-[#B6EB9D] cursor-pointer">
      <img src="cricket.png" alt="Cricket" className="h-40" />
      <h1 className="text-[30px] text-black saman mt-3">Cricket</h1>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-lg max-h-[600px] space-y-4 border bg-black p-6 rounded-lg">
            <button onClick={() => setModalOpen(false)} className="absolute top-2 right-3 cursor-pointer text-white">X</button>
            <DialogTitle className="saman font-bold text-red-600 text-center text-4xl underline">
              Cricket
            </DialogTitle>
            <Description className="text-slate-700 text-center text-2xl robo">
              Rules Of Cricket
            </Description>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[350px] p-2 border border-gray-700 rounded-md">
              <p className="text-gray-400 robo">
                <span className="font-bold text-white">Pitch:</span> 
                <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                  <li>The pitch is a rectangular area in the middle of the field.</li>
                  <li>It is 22 yards long and 10 feet wide.</li>
                  <li>The crease is the line that marks the batsmans safe zone.</li>
                </ul>
              </p>

              <p className="text-gray-400 mt-4 robo">
                <span className="font-bold text-white">Fielding Positions:</span>
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                <li>Fielders position themselves to defend against the batsmans shots.</li>
                <li>Each fielding position has a specific name and purpose.</li>
                <li>Common positions include slips, gully, mid-on, mid-off, and fine leg.</li>
              </ul>

              <p className="text-gray-400 mt-4 robo">
                <span className="font-bold text-white">Ways to Dismiss a Batsman:</span>
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                <li><span className="font-bold">Hit Wicket:</span> The batsman hits their own stumps while playing a shot.</li>
                <li><span className="font-bold">Leg Before Wicket (LBW):</span> The ball strikes any part of the batsmans body in line with the stumps.</li>
                <li><span className="font-bold">Double Hit:</span> The batsman intentionally hits the ball twice.</li>
              </ul>

              <p className="text-gray-400 mt-4 robo">
                <span className="font-bold text-white">Other Rules:</span>
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                <li><span className="font-bold">Wide Ball:</span> A delivery is called wide if it passes outside the batsmans reach.</li>
                <li><span className="font-bold">Fair Play:</span> Cricket upholds the spirit of fair play and sportsmanship.</li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md" onClick={onClickDownload}>
                Download Brochure
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default Cricket;
