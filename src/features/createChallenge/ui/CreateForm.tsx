"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "./DatePicker";
import { DateRange } from "react-day-picker";
import FileUploader from "./FileUploader";
import { Button } from "@/components/ui/button";

export function CreateForm() {
  const [challengeType, setChallengeType] = useState("");
  const [reward, setReward] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [file, setFile] = useState<File | undefined>(undefined);

  const handleFileChange = (newFile: File) => {
    setFile(newFile);
  };

  const handleRemoveFile = () => {
    setFile(undefined);
  };
  const isFormComplete = challengeType && reward && dateRange?.from && dateRange?.to && file;

  return (
    <div className="space-y-6 overflow-y-auto max-h-auto">
      <div className="mt-6">
        <h2 className="text-base font-bold text-font-green mb-2">
          환경을 지킬 수 있는 챌린지를 개최해봐요!
        </h2>
        <p className="text-sm text-gray-500">
          아래 필수 정보들만 입력해 주시면 <br />
          고객들과 함께할 수 있는 챌린지가 열려요.
        </p>
      </div>

      <div className="space-y-7">
        <div className="space-y-4">
          <h1 className="text-sm text-font-green">* 챌린지 종류</h1>
          <Select onValueChange={setChallengeType}>
            <SelectTrigger className="w-full bg-yellow-300 !h-[51px] !border !border-[#E7E8EB] rounded-3xl">
              <SelectValue placeholder="챌린지 종류" />
            </SelectTrigger>
            <SelectContent className="bg-yellow-300 !text-base h-[169px]">
              <SelectItem
                value="tumbler"
                className="h-[52px] hover:!bg-green-300 focus:bg-green-300 aria-selected:bg-green-300 hover:!text-font-black">
                텀블러에 음료 담기
              </SelectItem>
              <SelectItem
                value="straw"
                className="h-[52px] hover:!bg-green-300 focus:bg-green-300 aria-selected:bg-green-300 hover:!text-font-black">
                빨대 사용 안하기
              </SelectItem>
              <SelectItem
                value="sns"
                className="h-[52px] hover:!bg-green-300 focus:bg-green-300 aria-selected:bg-green-300 hover:!text-font-black">
                SNS에 카페 방문 인증하기
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <h1 className="text-sm text-font-green">* 제공할 리워드</h1>
          <Input
            id="reward"
            placeholder="아메리카노"
            value={reward}
            onChange={e => setReward(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-sm text-font-green">* 진행 기간</h1>
          <DatePicker date={dateRange} setDate={setDateRange} />
        </div>

        <div className="space-y-4">
          <h1 className="text-sm text-font-green">* 챌린지 대표 사진</h1>
          <p className="text-xs text-[#8E8E93]">
            10MB 이하의 이미지 파일(JPG, PNG)을
            <br />
            업로드 해 주세요
          </p>
          <FileUploader
            file={file}
            onFileChange={handleFileChange}
            onRemoveFile={handleRemoveFile}
          />
        </div>
        <Button
          disabled={!isFormComplete}
          className={`w-full h-[50px] rounded-full text-base font-bold 
    ${!isFormComplete ? "bg-gray-300 text-white cursor-not-allowed" : "bg-green-900 text-white"}
  `}>
          다음
        </Button>
      </div>
    </div>
  );
}
