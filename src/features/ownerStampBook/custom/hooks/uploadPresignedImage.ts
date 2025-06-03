import { getPresignedUrl, uploadImageToS3 } from "@/shared/api/image";

export const uploadAndGetFileUrl = async (file: File, side: "front" | "back"): Promise<string> => {
  const extension = file.name.split(".").pop();
  const fileName = `${side}-bg-${Date.now()}.${extension}`;
  const directory = "stampbook";
  const { presignedUrl } = await getPresignedUrl(directory, fileName);
  await uploadImageToS3(file, presignedUrl);
  return presignedUrl;
};
