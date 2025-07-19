"use client";

import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
};

export default function ResumeModal({ isOpen, onClose, resumeUrl }: ResumeModalProps) {
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    } else {
      document.removeEventListener("keydown", handleEsc);
    }

    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true" />

        {/* Modal panel */}
        <Dialog.Panel className="relative z-50 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-semibold">Resume Preview</Dialog.Title>
            <Button onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:hover:text-white">
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="h-[75vh] overflow-y-auto border rounded">
            <iframe
              src={resumeUrl}
              title="Resume"
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
