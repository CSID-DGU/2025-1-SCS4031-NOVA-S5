'use client';

import { useState } from "react";
import Lottie from "lottie-react";
import duckAnimation from "@/shared/assets/duckAnimation.json";


function Character() {
  const [isStopped, setIsStopped] = useState(false);

  return (
      <Lottie
        animationData={duckAnimation}
        loop={1}
        onComplete={() => setIsStopped(true)}
        autoplay={!isStopped}
        style={{
          transform: 'rotate(-20deg)', // 애니메이션 자체 확대
          transformOrigin: 'center center',
          width: '900px',
          height: '900px',
        }}
      />
  );
}

export default Character;
