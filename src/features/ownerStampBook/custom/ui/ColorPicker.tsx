import { memo, useRef } from "react";
import { ChromePicker } from "react-color";
import { useCustomStore } from "@/shared/store/customStore";

const ColorPicker = memo(() => {
  const {
    selectedSide,
    frontBackground,
    backBackground,
    setFrontBackground,
    setBackBackground,
    setShowColorPicker,
  } = useCustomStore();

  const isDragging = useRef(false);

  const selectedColor = selectedSide === "front" ? frontBackground : backBackground;

  const handleColorChange = (color: any) => {
    isDragging.current = true;
    if (selectedSide === "front") setFrontBackground(color.hex);
    else setBackBackground(color.hex);
  };

  const handleChangeComplete = () => {
    if (isDragging.current) {
      isDragging.current = false;
      setTimeout(() => setShowColorPicker(false), 100);
    }
  };

  return (
    <div
      className="absolute bottom-[100%] z-[9999] rounded p-2"
      onMouseDown={e => e.preventDefault()}>
      <ChromePicker
        color={selectedColor}
        onChange={handleColorChange}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
});

export default ColorPicker;
