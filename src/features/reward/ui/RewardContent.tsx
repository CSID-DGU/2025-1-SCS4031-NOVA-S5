"use client";

import { useState } from "react";
import StampBookList from "./StampBookList";

export default function RewardContent() {
  const [sortType, setSortType] = useState<"latest" | "reward">("latest");

  return (
    <section className="relative w-full bg-yellow-100 flex flex-col gap-[15px] px-6 pb-6">
      <div className="h-[15px] mt-[40px] flex justify-end gap-[10px] items-center">
        <div
          className="flex gap-[7px] items-center justify-center cursor-pointer"
          onClick={() => setSortType("latest")}>
          <div
            className={`w-[4px] h-[4px] rounded-full ${sortType === "latest" ? "bg-green-100" : "bg-[#8E8E93]"}`}
          />
          <p
            className={`text-xs font-medium ${
              sortType === "latest" ? "text-green-100" : "text-[#8E8E93]"
            }`}>
            최신순
          </p>
        </div>
        <div
          className="flex gap-[7px] items-center justify-center cursor-pointer"
          onClick={() => setSortType("reward")}>
          <div
            className={`w-[4px] h-[4px] rounded-full ${sortType === "reward" ? "bg-green-100" : "bg-[#8E8E93]"}`}
          />
          <p
            className={`text-xs font-medium ${
              sortType === "reward" ? "text-green-100" : "text-[#8E8E93]"
            }`}>
            리워드 많은 순
          </p>
        </div>
      </div>
      <StampBookList />
    </section>
  );
}
