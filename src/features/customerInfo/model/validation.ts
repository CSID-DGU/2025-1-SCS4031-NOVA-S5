import { z } from "zod";

export const stampSchema = z.object({
  count: z.string().min(1, "1개 이상 입력해주세요.").regex(/^\d+$/, "숫자만 입력 가능합니다."),
});

export type StampSchema = z.infer<typeof stampSchema>;
