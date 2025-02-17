import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

function Chess() {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickDownload = () => {
    fetch("Chess Brochure.pdf").then((response) => {
      response.blob().then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Chess Brochure.pdf";
        a.click();
      });
    });
  };

  return (
    <div onClick={() => setModalOpen(true)} className="hover:shadow-xl hover:scale-105 h-60 w-60 border-4 animate-border-blink flex flex-col justify-center items-center rounded-2xl bg-[#B6EB9D] cursor-pointer">
      <img src="chess.png" alt="Chess" className="h-40" />
      <h1 className="text-[30px] text-black saman mt-3 saman">Chess</h1>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-lg max-h-[600px] space-y-4 border bg-black p-6 rounded-lg">
            <button onClick={() => setModalOpen(false)} className="absolute top-2 right-3 cursor-pointer text-white">X</button>
            <DialogTitle className="saman font-bold text-red-600 text-center text-4xl underline">
              Chess
            </DialogTitle>
            <Description className="text-slate-700 text-center text-2xl robo">
              Rules Of Chess
            </Description>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[350px] p-2 border border-gray-700 rounded-md">
              <p className="text-gray-400 robo">
                <span className="font-bold text-white">Chess Rule to Move the Pieces:</span>
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                <li><span className="font-bold">Pawn (P):</span> Moves forward one square but captures diagonally. Can move two squares on its first move. Promotes upon reaching the opponent’s end.</li>
                <li><span className="font-bold">Rook (R):</span> Moves horizontally or vertically any number of squares.</li>
                <li><span className="font-bold">Knight (N):</span> Moves in an L-shape and can jump over pieces.</li>
                <li><span className="font-bold">Bishop (B):</span> Moves diagonally any number of squares.</li>
                <li><span className="font-bold">Queen (Q):</span> Can move horizontally, vertically, or diagonally any number of squares.</li>
                <li><span className="font-bold">King (K):</span> Moves one square in any direction. Protecting the king is the objective of the game.</li>
              </ul>

              <p className="text-gray-400 mt-4 robo">
                <span className="font-bold text-white">Chess Rule to Make the First Move:</span>
              </p>
              <p className="text-gray-400 robo">
                The game starts with the player who has the white pieces. The first move sets the tone and strategy of the match.
              </p>

              <p className="text-gray-400 mt-4 robo">
                <span className="font-bold text-white">The Rules on How to Win:</span>
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 robo">
                <li><span className="font-bold">Checkmate:</span> The king is under threat and has no escape.</li>
                <li><span className="font-bold">Check:</span> The king is under attack but can escape.</li>
                <li><span className="font-bold">Stalemate:</span> A draw occurs when a player has no legal moves but is not in check.</li>
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

export default Chess;
