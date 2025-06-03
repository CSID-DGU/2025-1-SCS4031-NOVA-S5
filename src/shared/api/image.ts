import api from "./axios";

// presignedUrl 받기
export const getPresignedUrl = async (directory: string, fileName: string) => {
  const res = await api.post("/s3/presigned-url", {
    directory,
    fileName,
  });
  return res.data.data;
};

// s3에 이미지 업로드
export const uploadImageToS3 = async (file: File, presignedUrl: string) => {
  await fetch(presignedUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });
};

// 카페 등록시 presignedUrl 받기
export const getCafePresignedUrl = async () => {
  const res = await api.post("/s3/presigned-url/cafe");

  return res.data.data;
};
