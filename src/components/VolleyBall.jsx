import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

function VolleyBall() {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickDownload = () => {
    fetch("volleyball.pdf").then((response) => {
      response.blob().then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "volleyball.pdf";
        a.click();
      });
    });
  };

  return (
    <div onClick={() => setModalOpen(true)} className="hover:shadow-xl hover:scale-105 h-60 w-60 border-4 animate-border-blink flex flex-col justify-center items-center rounded-2xl bg-[#B6EB9D] cursor-pointer">
      <img src="volleyball.png" alt="Volleyball" className="h-40" />
      <h1 className="text-[30px] text-black saman mt-3">Volleyball</h1>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-lg max-h-[600px] space-y-4 border bg-black p-6 rounded-lg">
            <button onClick={() => setModalOpen(false)} className="absolute top-2 right-3 cursor-pointer text-white">X</button>
            <DialogTitle className="saman font-bold text-red-700 text-center text-4xl underline">Volleyball</DialogTitle>
            <Description className="text-slate-700 text-center text-2xl robo">Rules of Volleyball</Description>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[350px] p-2 border border-gray-700 rounded-md">
              <p className="text-gray-400 robo">
                <span className="font-bold text-white">General Rules:</span>
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                <li>Only 6 players on the floor at any given time: 3 in the front row and 3 in the back row.</li>
                <li>Points are made on every serve for the winning team of the rally (rally-point scoring).</li>
                <li>Players may not hit the ball twice in succession (a block is not considered a hit).</li>
                <li>The ball may be played off the net during a volley and on a serve.</li>
                <li>A ball hitting a boundary line is in.</li>
                <li>A ball is out if it hits an antenna, the floor completely outside the court, any of the net or cables outside the antenna, the referee stand or pole, or the ceiling above a non-playable area.</li>
                <li>It is legal to contact the ball with any part of a player’s body.</li>
                <li>It is illegal to catch, hold, or throw the ball.</li>
                <li>A player cannot block or attack a serve from on or inside the 10-foot line.</li>
                <li>After the serve, front-line players may switch positions at the net.</li>
                <li>Matches are made up of sets; the number depends on the level of play.</li>
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

export default VolleyBall;
