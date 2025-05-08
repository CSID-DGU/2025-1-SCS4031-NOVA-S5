import { SilhouetteColor } from "@/shared/model";
import { getScanCharacter } from "@/shared/utils";
import { QRCodeCanvas } from "qrcode.react";

interface QrSectionProps {
  uuid: string;
  color: SilhouetteColor;
}

function QrSection({ uuid, color }: QrSectionProps) {
  const characterUrl = getScanCharacter(color);
  return (
    <div className="relative flex flex-col items-center">
      <img src={characterUrl} alt="scan-character" className="absolute top-[-30px]" />
      <img src="/img/qr-section.svg" alt="qr-section" />
      <QRCodeCanvas value={uuid} size={110} className="absolute top-6" />
    </div>
  );
}

export default QrSection;
