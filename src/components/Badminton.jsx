import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Badminton() {
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
      <img src="badminton.png" alt="Badminton" className="h-40" />
      <h1 className="saman text-[30px] text-black mt-3">Badminton</h1>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-lg max-h-[600px] space-y-4 border bg-black p-6 rounded-lg">
            <button onClick={() => setModalOpen(false)} className="absolute top-2 right-3 cursor-pointer text-white">
                          <IoMdClose className="size-8" />
                        </button>
            <DialogTitle className="saman font-bold text-red-700 text-center text-4xl underline">
              Badminton
            </DialogTitle>
            <Description className="text-slate-700 text-center text-2xl robo">
              Rules Of Badminton
            </Description>

            {/* Scrollable Content with Bullet Points */}
            <div className="overflow-y-auto max-h-[350px] p-2 border border-gray-700 rounded-md">
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>A match consists of the best of three games to 21 points.</li>
                <li>Every time there is a serve, one point is scored.</li>
                <li>If the score is 20-20, the individual or team must win by two points to win the game.</li>
                <li>
                  In terms of serving:
                  <ul className="list-[circle] list-inside ml-4 space-y-1">
                    <li>If the server’s score is even, they serve from the right service court.</li>
                    <li>If the server’s score is odd, they serve from the left service court.</li>
                  </ul>
                </li>
                <li>The rally is over when:</li>
                <ul className="list-[circle] list-inside ml-4 space-y-1">
                  <li>The shuttlecock contacts the floor.</li>
                  <li>The shuttlecock does not return over the net.</li>
                  <li>The shuttlecock lands outside the court lines.</li>
                </ul>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <button className="robo mt-2 px-4 py-2 bg-red-600 text-white rounded-md" onClick={onClickDownload}>
                Download Brochure
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default Badminton;
