import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

function Basketball() {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickDownload = () => {
    fetch("Badminton Boys & Girls.pdf").then((response) => {
      response.blob().then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Badminton Boys & Girls.pdf";
        a.click();
      });
    });
  };

  return (
    <div onClick={() => setModalOpen(true)} className="hover:shadow-xl hover:scale-105 h-60 w-60 border-4 animate-border-blink flex flex-col justify-center items-center rounded-2xl bg-[#B6EB9D] cursor-pointer">
      <img src="basketball.png" alt="Basketball" className="h-40" />
      <h1 className="saman text-[30px] text-black mt-3saman ">Basketball</h1>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-lg max-h-[600px] space-y-4 border bg-black p-6 rounded-lg">
            <button onClick={() => setModalOpen(false)} className="absolute top-2 right-3 cursor-pointer text-white">X</button>
            <DialogTitle className="saman font-bold text-red-700 text-center text-4xl underline">
              Basketball
            </DialogTitle>
            <Description className="text-slate-700 text-center text-2xl">
              Rules Of Basketball
            </Description>

            {/* Scrollable Content with Bullet Points */}
            <div className="overflow-y-auto max-h-[350px] p-2 border border-slate-700 rounded-md">
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>The ball must be held between or in the hands of players without involving the shoulder.</li>
                <li>The ball can be thrown in any direction with either hand.</li>
                <li>The ball can also be batted with any hand in any direction.</li>
                <li>
                  A player cannot run while holding the ball. They must throw it from the spot they catch it.
                  <ul className="list-[circle] list-inside ml-4 space-y-1">
                    <li>Exception: If a player catches the ball while running at speed, slight movement is allowed.</li>
                  </ul>
                </li>
                <li>No pushing, shouldering, tripping, or striking opponents is allowed to prevent injuries.</li>
                <li>Striking the ball with a fist is considered a foul.</li>
                <li>If a team commits three consecutive fouls, the opponent may count it as a goal.</li>
                <li>If the ball is shot and rests on the net, it is counted as a goal.</li>
                <li>
                  The umpire is the judge of the game:
                  <ul className="list-[circle] list-inside ml-4 space-y-1">
                    <li>If a team makes three consecutive fouls, the umpire reports it to the referee.</li>
                  </ul>
                </li>
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

export default Basketball;
