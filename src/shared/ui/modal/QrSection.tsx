import { SilhouetteColor } from "@/shared/model";
import { getScanCharacter } from "@/shared/utils";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";

interface QrSectionProps {
  uuid: string;
  color: SilhouetteColor;
}

function QrSection({ uuid, color }: QrSectionProps) {
  const characterUrl = getScanCharacter(color);
  return (
    <div className="relative flex flex-col items-center w-full">
      <Image
        src={characterUrl}
        alt="scan-character"
        className="absolute top-[-200px]"
        width={200}
        height={200}
      />
      <QRCodeCanvas value={uuid} size={200} className="absolute top-[-120px]" />
    </div>
  );
}

export default QrSection;
