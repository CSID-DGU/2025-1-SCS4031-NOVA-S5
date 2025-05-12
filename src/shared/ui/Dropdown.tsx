"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, ChevronUpIcon, ClockIcon } from "lucide-react";
import { CAFE_MOOD, TIMES } from "../constants/dropdown";

interface DropdownProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

export function TimeDropdown({ placeholder, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [triggerWidth, setTriggerWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, []);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        ref={triggerRef}
        className="relative flex items-center w-full h-[51px] bg-yellow-300 rounded-[20px] border border-[#E7E8EB] outline-none px-4 py-2 text-gray-400 text-sm gap-2">
        <ClockIcon className="w-5 h-5 text-[#dcdcdc]" />
        <span className={selectedTime ? "text-font-black" : "text-[#dcdcdc]"}>
          {selectedTime ?? placeholder}
        </span>

        {open ? (
          <ChevronUpIcon className="absolute top-[15px] right-3 w-5 h-5 text-[#dcdcdc]" />
        ) : (
          <ChevronDownIcon className="absolute top-[15px] right-3 w-5 h-5 text-[#dcdcdc]" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        style={{ width: triggerWidth ?? "auto" }}
        className="flex flex-col gap-2 rounded-[20px] max-h-[300px] overflow-y-auto bg-[#FFFCF5] px-3 py-2 outline-none w-full">
        {TIMES.map(time => (
          <DropdownMenuItem
            key={time}
            onSelect={e => {
              e.preventDefault();
              setSelectedTime(time);
              setOpen(false);
              onChange?.(time);
            }}
            className={`py-3 px-5 text-center text-md text-font-black rounded-[15px] cursor-pointer outline-none ${
              selectedTime === time ? "bg-green-300 hover:bg-green-300" : "hover:bg-green-300"
            }`}>
            {time}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function MoodDropdown({ onChange }: { onChange?: (value: string, type: string) => void }) {
  const [open, setOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [triggerWidth, setTriggerWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, []);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        ref={triggerRef}
        className="relative flex items-center w-full h-[51px] bg-yellow-300 rounded-[20px] border border-[#E7E8EB] outline-none px-4 py-2 text-gray-400 text-sm gap-2">
        <span className={selectedMood ? "text-font-black" : "text-[#dcdcdc]"}>
          {selectedMood ?? "카페 분위기를 선택해 주세요"}
        </span>
        {open ? (
          <ChevronUpIcon className="absolute top-[15px] right-3 w-5 h-5 text-[#dcdcdc]" />
        ) : (
          <ChevronDownIcon className="absolute top-[15px] right-3 w-5 h-5 text-[#dcdcdc]" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        style={{ width: triggerWidth ?? "auto" }}
        className="flex flex-col gap-2 rounded-[20px] max-h-[300px] overflow-y-auto bg-[#FFFCF5] px-3 py-2 outline-none w-full">
        {CAFE_MOOD.map(({ label, type }) => (
          <DropdownMenuItem
            key={label}
            onSelect={e => {
              e.preventDefault();
              setSelectedMood(label);
              setOpen(false);
              onChange?.(label, type);
            }}
            className={`py-3 px-5 text-center text-md text-font-black rounded-[15px] cursor-pointer outline-none ${
              selectedMood === label ? "bg-green-300 hover:bg-green-300" : "hover:bg-green-300"
            }`}>
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
