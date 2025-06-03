"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import CustomMenu from "./CustomMenu";
import { ChromePicker } from "react-color";
import SideSelectModal from "./SideSelectModal";
import { useCustomStore } from "@/shared/store/customStore";
import TextBottomSheet from "./TextBottomSheet";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "@tanstack/react-query";
import { Cafe } from "../../example/model/cafe";
import { getSelectedCafe } from "@/features/owner/service/api";

const CustomStampFront = dynamic(
  () => import("@/features/ownerStampBook/custom/ui/CustomStampFront"),
  {
    ssr: false,
  }
);

const CustomStampBack = dynamic(
  () => import("@/features/ownerStampBook/custom/ui/CustomStampBack"),
  {
    ssr: false,
  }
);

export default function CustomContent() {
  const {
    frontBackground,
    backBackground,
    frontImage,
    backImage,
    selectedSide,
    modalType,
    isModalOpen,
    showBackgroundColorPicker,
    showTextColorPicker,
    tempBackgroundColor,
    textColor,
    selectedFont,
    setFrontBackground,
    setBackBackground,
    setFrontImage,
    setBackImage,
    setSelectedSide,
    setModalType,
    setIsModalOpen,
    setShowBackgroundColorPicker,
    setShowTextColorPicker,
    setTempBackgroundColor,
    setTextColor,
    setSelectedFont,
    addText,
  } = useCustomStore();
  const menuBarRef = useRef<HTMLDivElement>(null);

  const handleBackgroundDrag = (color: any) => {
    setTempBackgroundColor(color.hex);
  };

  const handleBackgroundChangeComplete = () => {
    if (selectedSide === "front") {
      setFrontBackground(tempBackgroundColor);
    } else {
      setBackBackground(tempBackgroundColor);
    }
    setShowBackgroundColorPicker(false);
  };

  const handleTextColorChange = (color: any) => {
    setTextColor(color.hex);
  };

  const handleTextColorChangeComplete = () => {
    setShowTextColorPicker(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (selectedSide === "front") {
        setFrontImage(file);
      } else {
        setBackImage(file);
      }
    }
  };

  const handleSideSelect = (side: "front" | "back") => {
    setSelectedSide(side);
    setIsModalOpen(false);
    if (modalType === "color") {
      setShowBackgroundColorPicker(true);
      setTempBackgroundColor(side === "front" ? frontBackground : backBackground);
    } else if (modalType === "image") {
      document.getElementById("image-upload")?.click();
    } else if (modalType === "text") {
      if (selectedFont) {
        const newText = {
          id: uuidv4(),
          text: "Sample Text",
          color: textColor,
          font: selectedFont,
          side: side,
          x: 0,
          y: 0,
        };
        addText(newText);
        setSelectedFont(null);
        setModalType(null);
      }
    }
  };

  const { data: selectedCafe } = useQuery<Cafe>({
    queryKey: ["selectedCafe"],
    queryFn: getSelectedCafe,
  });

  return (
    <>
      <section className="w-full py-[36px] flex flex-col gap-[60px]">
        <CustomStampFront backgroundColor={frontBackground} backgroundImage={frontImage} />
        <CustomStampBack backgroundColor={backBackground} backgroundImage={backImage} />
      </section>
      <div className="absolute bottom-0 left-0 right-0" ref={menuBarRef}>
        <CustomMenu
          onBackgroundColorClick={() => {
            setModalType("color");
            setIsModalOpen(true);
            setTempBackgroundColor(selectedSide === "front" ? frontBackground : backBackground);
          }}
          onBackgroundImageClick={() => {
            setModalType("image");
            setIsModalOpen(true);
          }}
          onTextColorClick={() => setShowTextColorPicker(true)}
        />

        {showBackgroundColorPicker && (
          <>
            <div className="fixed inset-0 z-[99]" onClick={handleBackgroundChangeComplete} />
            <div
              className="absolute left-1/2 bottom-full z-[100] translate-x-[-50%] mb-4"
              style={{ minWidth: 240 }}>
              <ChromePicker color={tempBackgroundColor} onChange={handleBackgroundDrag} />
            </div>
          </>
        )}

        {showTextColorPicker && (
          <>
            <div className="fixed inset-0 z-[99]" onClick={handleTextColorChangeComplete} />
            <div
              className="absolute left-1/2 bottom-full z-[100] translate-x-[-50%] mb-4"
              style={{ minWidth: 240 }}>
              <ChromePicker color={textColor} onChange={handleTextColorChange} />
            </div>
          </>
        )}
      </div>

      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      <SideSelectModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        characterType={selectedCafe?.characterType}
        onSelect={handleSideSelect}
      />
      <TextBottomSheet
        isOpen={modalType === "text" && !selectedFont && !isModalOpen}
        onClose={() => {
          setModalType(null);
          setSelectedFont(null);
        }}
      />
    </>
  );
}
