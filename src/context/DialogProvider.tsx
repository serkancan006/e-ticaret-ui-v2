"use client";

import React, { useState, createContext, ReactNode, ReactElement } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export type DialogContextType = {
  showDialog: (component: ReactElement) => void; // showDialog fonksiyonu eklendi
  closeDialog: () => void; // closeDialog fonksiyonu
};

export const DialogContext = createContext<DialogContextType | undefined>(
  undefined
);

const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [dialogContent, setDialogContent] = useState<ReactElement | null>(null);

  const showDialog = (component: ReactElement) => {
    setDialogContent(component);
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
    setDialogContent(null);
  };

  return (
    <DialogContext.Provider value={{ showDialog, closeDialog }}>
      {children}
      <Dialog
        open={openDialog}
        onClose={setOpenDialog}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              {/* X iconu - Sağ üstte */}
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => closeDialog()}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {dialogContent}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </DialogContext.Provider>
  );
};

export default DialogProvider;
