import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

function Swimming() {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickDownload = () => {
    fetch("Swimming Boys & girls.pdf").then((response) => {
      response.blob().then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Swimming Boys & girls.pdf";
        a.click();
      });
    });
  };

  return (
    <div onClick={() => setModalOpen(true)} className="hover:shadow-xl hover:scale-105 h-60 w-60 border-4 animate-border-blink flex flex-col justify-center items-center rounded-2xl bg-[#B6EB9D] cursor-pointer">
      <img src="swimming.png" alt="Swimming" className="h-40" />
      <h1 className="text-[30px] text-black saman mt-3">Swimming</h1>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-lg max-h-[600px] space-y-4 border bg-black p-6 rounded-lg">
            <button onClick={() => setModalOpen(false)} className="absolute top-2 right-3 cursor-pointer text-white">X</button>
            <DialogTitle className="saman font-bold text-red-700 text-center text-4xl underline">
              Swimming
            </DialogTitle>
            <Description className="text-slate-700 text-center text-2xl robo">
              Rules Of Swimming
            </Description>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[350px] p-2 border border-gray-700 rounded-md">
              <p className="text-gray-400 robo">
                <span className="font-bold text-white">Swimming Competition Rules:</span> Swimming rules include stroke cycles, turns, starting blocks, and other technical aspects.
              </p>

              <p className="text-gray-400 mt-4 robo">
                <span className="font-bold text-white">Stroke Cycles:</span>
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                <li>Each stroke cycle consists of one arm stroke and one leg kick.</li>
                <li>The arms must move simultaneously and on the same horizontal plane.</li>
                <li>The hands are pushed forward together from the breast.</li>
                <li>The feet must turn outward during the propulsive part of the kick.</li>
              </ul>

              <p className="text-gray-400 mt-4 robo">
                <span className="font-bold text-white">Turns:</span>
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                <li>Swimmers must make contact with the wall during turns.</li>
                <li>In freestyle and backstroke, swimmers may perform a somersault turn.</li>
                <li>In butterfly and breaststroke, both hands must touch the wall simultaneously.</li>
              </ul>

              <p className="text-gray-400 mt-4 robo">
                <span className="font-bold text-white">Starting Blocks:</span>
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                <li>Athletes start from an elevated platform at the end of a lane.</li>
                <li>In backstroke events, athletes start in the water.</li>
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

export default Swimming;
