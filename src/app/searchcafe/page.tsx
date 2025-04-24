"use client";

import CafeSearchHeader from "@/features/searchCafe/ui/CafeSearchHeader";
import SearchList from "@/features/searchCafe/ui/SearchList";
import { useState } from "react";

export default function SearchCafe() {
  const [keyword, setKeyword] = useState("");
  return (
    <div>
      <CafeSearchHeader keyword={keyword} onChange={setKeyword} />
      <SearchList keyword={keyword} />
    </div>
  );
}
