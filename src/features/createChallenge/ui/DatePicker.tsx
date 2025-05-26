"use client";

import * as React from "react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface CalendarDateRangePickerProps {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}

export function DatePicker({ date, setDate }: CalendarDateRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant="outline"
          className={cn(
            "w-full h-[56px] justify-start text-left font-normal bg-yellow-300 rounded-3xl border-[#E7E8EB]",
            "hover:bg-yellow-300 hover:text-inherit" // hover 효과 없애기
          )}>
          <CalendarIcon className="mr-2 h-4 w-4 " />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "yyyy.MM.dd")} ~ {format(date.to, "yyyy.MM.dd")}
              </>
            ) : (
              format(date.from, "yyyy.MM.dd")
            )
          ) : (
            <span>날짜를 선택하세요</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
