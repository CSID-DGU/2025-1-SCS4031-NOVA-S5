import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo-container">
          <Image 
            src="./icon/ecok-logo.svg" 
            alt="로고" 
            width={80} 
            height={24} 
            className="logo"
          />
        </Link>
        <div className="header-right">
          {/* 필요한 경우 오른쪽에 추가 요소 배치 */}
        </div>
      </div>
    </header>
  );
} 