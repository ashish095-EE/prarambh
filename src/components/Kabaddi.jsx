import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

function Kabaddi() {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickDownload = () => {
    fetch("Kabaddi Boys & girls.pdf").then((response) => {
      response.blob().then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Kabaddi Boys & girls.pdf";
        a.click();
      });
    });
  };

  return (
    <div onClick={() => setModalOpen(true)} className="hover:shadow-xl hover:scale-105 h-60 w-60 border-4 animate-border-blink flex flex-col justify-center items-center rounded-2xl bg-[#B6EB9D] cursor-pointer">
      <img src="kabaddi.png" alt="Kabaddi" className="h-40" />
      <h1 className="text-[30px] text-black saman mt-3">Kabaddi</h1>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-lg max-h-[600px] space-y-4 border bg-black p-6 rounded-lg">
            <button onClick={() => setModalOpen(false)} className="absolute top-2 right-3 cursor-pointer text-white">X</button>
            <DialogTitle className="saman font-bold text-red-700 text-center text-4xl underline">
              Kabaddi
            </DialogTitle>
            <Description className="text-slate-700 text-center text-2xl robo">
              Rules Of Kabaddi
            </Description>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[350px] p-2 border border-gray-700 rounded-md">
              <p className="text-gray-400 robo">
                <span className="font-bold text-white">Kabaddi Overview:</span> 
                Kabaddi is a combative sport where teams raid the opponents court to score points.
              </p>

              <p className="text-gray-400 mt-4 robo">
                <span className="font-bold text-white">Basic Rules:</span>
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                <li><span className="font-bold">Number of Players:</span> Each team has seven players on the court, with three to five reserve players.</li>
                <li><span className="font-bold">Time Out:</span> Each team gets one 30-second time-out per half.</li>
                <li><span className="font-bold">Match Length:</span> A match is usually played for 40 minutes with a 5-minute break.</li>
              </ul>

              <p className="text-gray-400 mt-4 robo">
                <span className="font-bold text-white">Gameplay Rules:</span>
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                <li><span className="font-bold">Raiding:</span> The raider must touch as many defenders as possible without getting caught on a single breath.</li>
                <li><span className="font-bold">Golden Raid:</span> If the score is tied after five raids, the team that wins the toss gets a chance to raid in a golden raid.</li>
                <li><span className="font-bold">Ground:</span> The playing field should be level and soft.</li>
              </ul>

              <p className="text-gray-400 mt-4 robo">
                <span className="font-bold text-white">Fouls & Violations:</span>
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                <li><span className="font-bold">Disrupting the Match:</span> Players cannot intentionally delay or disrupt the game.</li>
                <li><span className="font-bold">Unsportsmanlike Conduct:</span> Making derogatory remarks about officials or engaging in violent tackles is considered a foul.</li>
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

export default Kabaddi;
