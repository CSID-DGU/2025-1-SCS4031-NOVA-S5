"use client";

import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface AddressInputProps {
  label?: string;
  id: string;
  value: string;
  onChange: (event: { target: { id: string; value: string } }) => void;
}

export default function AddressInput({ label, id, value, onChange }: AddressInputProps) {
  const [open, setOpen] = useState(false);

  const completeHandler = (data: any) => {
    onChange({ target: { id, value: data.address } });
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-font-green">
          {label}
        </label>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <input
            id={id}
            type="text"
            readOnly
            value={value ?? ""}
            placeholder="주소를 입력하세요"
            className={cn(
              "w-full h-[51px] bg-yellow-300 rounded-[20px] px-5 border border-[#E7E8EB] outline-none text-sm font-medium text-font-black placeholder:text-[#dcdcdc] focus:border-gray-700"
            )}
          />
        </DialogTrigger>
        <DialogContent showClose={false} className="!max-w-[400px] h-[600px] p-0 overflow-hidden">
          <DialogTitle className="sr-only">주소 검색</DialogTitle>
          <DaumPostcode onComplete={completeHandler} style={{ width: "100%", height: "100%" }} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
