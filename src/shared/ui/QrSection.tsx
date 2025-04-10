function QrSection() {
  // qr 이미지 url을 props로 받아옴
  return (
    <div className="flex flex-col items-center">
      <img src="./img/scan-rabbit.svg" alt="scan-rabbit" className="absolute top-[215px]"/>
      <img src="./img/qr-section.svg" alt="qr-section" />
      <img src="./img/mock-qr.svg" alt="mock-qr" className="absolute top-[275px]"/>
    </div>
  )
}

export default QrSection;

