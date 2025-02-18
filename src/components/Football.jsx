import { Dialog, DialogPanel, DialogTitle, Description } from "@headlessui/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Football() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch("football.pdf");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "football.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <div
      onClick={() => setModalOpen(true)}
      className="hover:shadow-xl hover:scale-105 h-60 w-60 border-4 flex flex-col justify-center items-center rounded-2xl bg-[#B6EB9D] cursor-pointer animate-border-blink"
    >
      <img src="football.png" alt="Football" className="h-40" />
      <h1 className="saman text-[30px] mt-3 text-black font-medium">Football</h1>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-lg max-h-[600px] space-y-4 border bg-black p-6 rounded-lg">
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-2 right-3 text-white hover:text-gray-400"
          >
            <IoMdClose className="size-8" />
          </button>

          <DialogTitle className="saman font-bold text-center text-4xl underline text-red-600">
            Football
          </DialogTitle>
          <Description className="robo text-center text-2xl text-slate-600">
            Rules Of Football
          </Description>

          <div className="overflow-y-auto max-h-[350px] p-2 border border-gray-700 rounded-md">
            <ul className="robo list-disc list-inside text-gray-400 space-y-2">
              <li>According to FIFA rules.</li>
              <li>Each team must have a minimum of 11 and a maximum of 15 players.</li>
              <li>Positions include:
                <ul className="list-disc ml-5">
                  <li>Goalkeeper</li>
                  <li>Defenders</li>
                  <li>Midfielders</li>
                  <li>Forwards</li>
                </ul>
              </li>
              <li>Each team must have one designated goalkeeper.</li>
              <li>The captain represents the team at the coin toss.</li>
              <li>If two or more teams in the same group are equal on points after the completion of the group stage, the ranking is determined by:
                <ul className="list-disc ml-5">
                  <li>Greatest number of points obtained in group matches between the teams concerned.</li>
                  <li>Superior goal difference from group matches between the teams concerned.</li>
                  <li>Greatest number of goals scored in all group matches between the teams concerned.</li>
                  <li>Coin toss if two teams have the same points.</li>
                </ul>
              </li>
              <li>Match Durations:
                <ul className="list-disc ml-5">
                  <li>League Match: 50 minutes (2 halves of 25 minutes).</li>
                  <li>Semi-Final: 60 minutes (2 halves of 30 minutes).</li>
                  <li>Final: 70 minutes (2 halves of 35 minutes).</li>
                  <li>Halftime break: 5 minutes.</li>
                </ul>
              </li>
              <li>Offside Rule: A player is offside if they are ahead of the last defender when the ball is passed to them.</li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="robo mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              onClick={handleDownload}
            >
              Download Rules
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}

export default Football;