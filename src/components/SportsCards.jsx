import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

function SportsCards() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="h-60 w-60 border flex justify-center items-center">
      <button onClick={() => setModalOpen(true)} className="bg-red-500">Open dialog</button>
      
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
       
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="relative max-w-lg space-y-4 border bg-black p-12 rounded-lg">
            <button onClick={() => setModalOpen(false)} className="absolute top-2 right-3 cursor-pointer ">X</button>
            <DialogTitle className="font-bold">Football</DialogTitle>
            <Description>Rules Of Footballs</Description>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="flex items-center justify-center">
              
              <button onClick={() => setModalOpen(false)}>Read More</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default SportsCards;
