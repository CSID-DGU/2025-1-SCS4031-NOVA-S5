"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import CustomStampBack from "./CustomStampBack";
import CustomMenu from "./CustomMenu";
const CustomStampFront = dynamic(
  () => import("@/features/ownerStampBook/custom/ui/CustomStampFrontClient"),
  {
    ssr: false,
  }
);

export default function CustomContent() {
  const [backgroundColor, setBackgroundColor] = useState("#FFFDF7");

  return (
    <>
      <section className="w-full py-[36px] flex flex-col gap-[60px]">
        <CustomStampFront backgroundColor={backgroundColor} />
        <CustomStampBack />
      </section>
      <div className="absolute bottom-0 left-0 right-0">
        <CustomMenu onBackgroundColorChange={setBackgroundColor} />
      </div>
    </>
  );
}
