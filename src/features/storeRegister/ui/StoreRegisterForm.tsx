"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoodDropdown } from "@/shared/ui/Dropdown";
import { XIcon } from "lucide-react";
import { StoreRegisterFormValues, storeRegisterSchema } from "@/lib/storeRegisterSchema";
import { formatBusinessNumber, formatPhoneNumber } from "@/shared/utils/formatNumber";
import AddressInput from "@/shared/ui/input/AddressInput";
import { addressToLatLng, registerCafe } from "@/shared/api/cafe";
import { useState } from "react";
import CafeRegisterModal from "@/shared/ui/modal/CafeRegisterModal";
import { useQueryClient } from "@tanstack/react-query";

export default function StoreRegisterForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid },
  } = useForm<StoreRegisterFormValues>({
    resolver: zodResolver(storeRegisterSchema),
    mode: "onChange",
  });
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const file = watch("file");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setValue("file", e.target.files[0], { shouldValidate: true });
    }
  };

  const handleRemoveFile = () => {
    setValue("file", undefined as unknown as File, { shouldValidate: true });
  };

  const getFileIcon = () => {
    if (!file) return null;
    const ext = file.name.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "pdf":
        return "/icon/file-pdf.svg";
      case "jpg":
      case "jpeg":
        return "/icon/file-jpg.svg";
      case "png":
        return "/icon/file-png.svg";
      default:
        return "/icon/file-unknown.svg";
    }
  };

  const onSubmit = async (data: StoreRegisterFormValues) => {
    try {
      const coords = await addressToLatLng(data.address);
      if (!coords) throw new Error("주소를 찾을 수 없습니다.");

      const formData = new FormData();
      formData.append("cafeName", data.storeName);
      formData.append("branchName", data.branchName);
      formData.append("cafePhone", data.cafePhone);
      formData.append("ownerName", data.ownerName);
      formData.append("ownerPhone", data.ownerPhone);
      formData.append("businessNumber", data.businessNumber);
      formData.append("roadAddress", data.address);
      formData.append("latitude", coords.y);
      formData.append("longitude", coords.x);
      formData.append("maxStampCount", "10");
      formData.append("characterType", data.mood);
      if (data.file) {
        formData.append("businessRegistrationPdf", data.file);
      }

      await registerCafe(formData);
      queryClient.setQueryData(["registeredCafe"], {
        cafeName: data.storeName,
        characterType: data.mood,
      });

      setIsOpen(true);
    } catch (err) {
      console.error("카페 등록 실패:", err);
      alert("카페 등록에 실패했습니다.");
    }
  };

  return (
    <main className="flex flex-col gap-10">
      <div className="flex flex-col gap-[11px]">
        <p className="text-md text-font-green font-bold">안녕하세요, 사장님!</p>
        <p className="text-sm text-[#8E8E93] font-semibold">
          사장님의 매장을 '에콕' 서비스에 등록하기 위해
          <br />
          필수 정보를 입력해 주세요.
        </p>
      </div>
      <form className="flex flex-col gap-[25px]" onSubmit={handleSubmit(onSubmit)}>
        <Input label="* 매장명" placeholder="더블톤" {...register("storeName")} />
        <Input label="* 지점명" placeholder="목동 본점" {...register("branchName")} />
        <AddressInput
          label="* 매장 주소"
          id="address"
          value={watch("address")}
          onChange={e => setValue("address", e.target.value, { shouldValidate: true })}
        />
        <Input label="* 매장 전화번호" placeholder="02-1234-5678" {...register("cafePhone")} />
        <Input label="* 대표자 성함" placeholder="홍길동" {...register("ownerName")} />
        <Input
          label="* 대표자 휴대폰 번호"
          placeholder="010-1234-5678"
          {...register("ownerPhone")}
          onChange={e => {
            const formatted = formatPhoneNumber(e.target.value);
            setValue("ownerPhone", formatted, { shouldValidate: true });
          }}
          value={watch("ownerPhone") ?? ""}
        />
        <Input
          label="* 사업자 등록번호"
          placeholder="123-45-67890"
          {...register("businessNumber")}
          onChange={e => {
            const formatted = formatBusinessNumber(e.target.value);
            setValue("businessNumber", formatted, { shouldValidate: true });
          }}
          value={watch("businessNumber") ?? ""}
        />

        <div className="flex flex-col gap-3">
          <label className="text-sm text-font-green font-medium">* 사업자 등록증</label>
          <p className="text-xs text-[#8E8E93] font-medium">
            10MB 이하의 이미지 파일 (PDF, JPG, PNG)을
            <br />
            업로드 해 주세요.
          </p>
          {!file ? (
            <>
              <label
                htmlFor="business-license"
                className="cursor-pointer flex flex-col items-center justify-center w-full h-[102px] bg-green-300 rounded-[8px] gap-1">
                <Image src="/icon/image-icon.svg" width={24} height={24} alt="image" />
                <p className="text-xs font-medium text-font-green">사진 첨부하기</p>
              </label>
              <input
                type="file"
                id="business-license"
                className="hidden"
                accept=".pdf, .jpg, .jpeg, .png"
                onChange={handleFileChange}
              />
            </>
          ) : (
            <div className="w-[175px] h-[35px] flex items-center justify-between bg-green-300 px-3 py-2 rounded-[8px]">
              <div className="flex items-center gap-2">
                <Image src={getFileIcon()!} alt="file" width={24} height={24} />
                <p className="text-sm font-medium text-font-green truncate max-w-[100px]">
                  {file.name}
                </p>
              </div>
              <button type="button" onClick={handleRemoveFile}>
                <XIcon className="w-5 h-5 text-[#254434B2]" />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm text-font-green font-medium">* 카페 특징</label>
          <p className="text-xs text-[#8E8E93] font-medium">
            캐릭터 매칭을 위해 사장님 카페의 특징을 선택해 주세요.
          </p>
          <MoodDropdown
            onChange={(_label, type) => {
              setValue("mood", type, { shouldValidate: true });
            }}
          />
        </div>

        <Button
          type="submit"
          disabled={!isValid}
          className={`w-full h-[50px] rounded-full ${
            isValid ? "bg-font-green" : "bg-[#DCDCDC]"
          } text-[#fff] text-md font-bold text-center mt-[35px] mb-[70px]`}>
          매장 등록 신청하기
        </Button>
      </form>
      <CafeRegisterModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
