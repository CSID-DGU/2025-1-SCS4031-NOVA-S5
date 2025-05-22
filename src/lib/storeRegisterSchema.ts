import { z } from "zod";

export const storeRegisterSchema = z.object({
  storeName: z.string().min(1, "매장명을 입력해주세요."),
  branchName: z.string().min(1, "지점명을 입력해주세요."),
  address: z.string().min(1, "주소를 입력해주세요."),
  cafePhone: z.string().min(1, "전화번호를 입력해주세요."),
  // openTime: z.string().min(1, "시작시간을 선택해주세요."),
  // closeTime: z.string().min(1, "종료시간을 선택해주세요."),
  // lastOrder: z.string().min(1, "라스트오더를 선택해주세요."),
  ownerName: z.string().min(1, "대표자 성함을 입력해주세요."),
  ownerPhone: z.string().min(1, "대표자 연락처를 입력해주세요."),
  businessNumber: z.string().min(1, "사업자 등록번호를 입력해주세요."),
  mood: z.string().min(1, "카페 특징을 선택해주세요."),
  reward: z.string().min(1, "증정할 리워드를 입력해주세요."),
  file: z
    .instanceof(File, { message: "파일을 첨부해주세요." })
    .refine(file => file.size <= 10 * 1024 * 1024, "10MB 이하의 파일만 가능합니다."),
});

export type StoreRegisterFormValues = z.infer<typeof storeRegisterSchema>;
