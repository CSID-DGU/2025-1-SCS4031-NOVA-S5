"use client";

import Image from "next/image";
import Link from "next/link";

export function PlusButton() {
  return (
    <Link href="/challenge/create">
      <button>
        <Image src="/icon/plus.svg" width={45} height={45} alt="plus" />
      </button>
    </Link>
  );
}
