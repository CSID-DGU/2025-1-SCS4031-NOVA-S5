"use client";

import dynamic from "next/dynamic";
import SideSelectModal from "./SideSelectModal";
import CustomMenu from "./CustomMenu";
import { useCustomStore } from "@/shared/store/customStore";

const CustomStampFront = dynamic(() => import("./CustomStampFront"), { ssr: false });
const CustomStampBack = dynamic(() => import("./CustomStampBack"), { ssr: false });

export default function CustomContent() {
  const {
    selectedSide,
    modalType,
    isModalOpen,
    setFrontImage,
    setBackImage,
    setSelectedSide,
    closeModal,
    setShowColorPicker,
  } = useCustomStore();

  const handleSideSelect = (side: "front" | "back") => {
    setSelectedSide(side);
    closeModal();

    if (modalType === "color") {
      setShowColorPicker(true);
    } else if (modalType === "image") {
      document.getElementById("hidden-file-upload")?.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (selectedSide === "front") setFrontImage(file);
    else setBackImage(file);
  };

  return (
    <>
      <section className="w-full py-[36px] flex flex-col gap-[60px]">
        <CustomStampFront />
        <CustomStampBack />
      </section>

      <div className="absolute bottom-0 left-0 right-0">
        <CustomMenu />
      </div>

      <SideSelectModal isOpen={isModalOpen} onClose={closeModal} onSelect={handleSideSelect} />

      <input
        id="hidden-file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </>
  );
}
