"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import CustomMenu from "./CustomMenu";
import { ChromePicker } from "react-color";
import SideSelectModal from "./SideSelectModal";

const CustomStampFront = dynamic(
  () => import("@/features/ownerStampBook/custom/ui/CustomStampFrontClient"),
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
  const [frontBackground, setFrontBackground] = useState("#FFFDF7");
  const [backBackground, setBackBackground] = useState("#FFFDF7");
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSide, setSelectedSide] = useState<"front" | "back">("front");
  const [modalType, setModalType] = useState<"color" | "image">("color");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleBackgroundChange = (color: string) => {
    if (selectedSide === "front") {
      setFrontBackground(color);
    } else {
      setBackBackground(color);
    }
    setShowColorPicker(false);
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
      setShowColorPicker(true);
    } else {
      document.getElementById("image-upload")?.click();
    }
  };

  return (
    <>
      <section className="w-full py-[36px] flex flex-col gap-[60px]">
        <CustomStampFront backgroundColor={frontBackground} backgroundImage={frontImage} />
        <CustomStampBack backgroundColor={backBackground} backgroundImage={backImage} />
      </section>
      <div className="absolute bottom-0 left-0 right-0">
        <CustomMenu
          onBackgroundColorClick={() => {
            setModalType("color");
            setIsModalOpen(true);
          }}
          onBackgroundImageClick={() => {
            setModalType("image");
            setIsModalOpen(true);
          }}
        />
      </div>

      <SideSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleSideSelect}
      />

      {/* 색상 선택기 */}
      {showColorPicker && (
        <div className="fixed bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="relative">
            <div className="fixed inset-0" onClick={() => setShowColorPicker(false)} />
            <ChromePicker
              color={selectedSide === "front" ? frontBackground : backBackground}
              onChange={color => handleBackgroundChange(color.hex)}
            />
          </div>
        </div>
      )}

      {/* 숨겨진 파일 업로드 입력 */}
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </>
  );
}
