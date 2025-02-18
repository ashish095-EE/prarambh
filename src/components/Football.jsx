import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Football() {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickDownload = () => {
    fetch("football.pdf").then((response) => {
      response.blob().then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "football.pdf";
        a.click();
      });
    });
  };

  return (
    <div onClick={() => setModalOpen(true)} className="hover:shadow-xl hover:scale-105 h-60 w-60 border-4 flex flex-col justify-center items-center rounded-2xl bg-[#B6EB9D] cursor-pointer animate-border-blink">
      <img src="football.png" alt="Football" className="h-40" />
      <h1 className="saman text-[30px] mt-3 text-black font-medium">Football</h1>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-lg max-h-[600px] space-y-4 border bg-black p-6 rounded-lg">
            <button onClick={() => setModalOpen(false)} className="absolute top-2 right-3 cursor-pointer text-white">
              <IoMdClose className="size-8" />
            </button>
            <DialogTitle className="saman font-bold flex justify-center items-center text-4xl underline text-red-600">
              Football
            </DialogTitle>
            <Description className="robo flex justify-center items-center text-2xl text-slate-600">
              Rules Of Football
            </Description>

            {/* Scrollable Content with Bullet Points */}
            <div className="overflow-y-auto max-h-[350px] p-2 border border-gray-700 rounded-md">
              <ul className="robo list-disc list-inside text-gray-400 space-y-2">
                <li>It is one of the most crucial football rules for the game.</li>
                <li>A football match has two teams playing against each other.</li>
                <li>The number of players in each team should be a minimum of 11 and must not exceed 15.</li>
                <li>Four categories of players are there in a football match: Goalkeeper, defenders, midfielders, and forwards.</li>
                <li>Each team must have one designated goalkeeper. If unavailable/suspended, any position player can become the goalkeeper.</li>
                <li>Each team is led by a captain who represents the team at the coin toss before kick-off or penalty kicks.</li>
                <li>Winning the coin toss lets the team choose the initial direction of play. The direction switches after halftime.</li>
                <li>The team that loses the toss does the first kick-off and starts the game.</li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <button className="robo mt-2 px-4 py-2 bg-red-600 text-white rounded-md cursor-pointer" onClick={onClickDownload}>
                Download Rules
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default Football;
