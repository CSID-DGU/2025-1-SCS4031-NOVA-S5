import { QRCodeCanvas } from "qrcode.react";

function QrSection({ uuid }: { uuid: string }) {
  return (
    <div className="relative flex flex-col items-center">
      <img src="/img/scan-rabbit.svg" alt="scan-rabbit" className="absolute top-[-30px]" />
      <img src="/img/qr-section.svg" alt="qr-section" />
      <QRCodeCanvas value={uuid} size={110} className="absolute top-6" />
    </div>
  );
}

export default QrSection;
