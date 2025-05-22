import { getChallengeShortPhrase } from "@/shared";
import Image from "next/image";

interface CertificationCardProps {
  challengeType: string;
}

export function CertificationCard({ challengeType }: CertificationCardProps) {
  return (
    <div>
      <div className="flex flex-row gap-2 mb-4">
        <Image src="/icon/challenge/qrcode.svg" alt="qr" width={18} height={18} />
        <label className="text-base font-extrabold text-font-green">챌린지 인증 방법</label>
      </div>
      <div className="flex flex-col bg-yellow-300 py-4 px-4 gap-5">
        <label className="text-sm font-bold text-font-green">
          주문 시 '{getChallengeShortPhrase(challengeType)}'라고 말씀해 주세요.
        </label>
        <p className="text-xs text-green-700">
          사장님께서 주문 적립과 챌린지 인증을 함께 진행해 주실 거예요.
        </p>
      </div>
    </div>
  );
}
