import api from "./axios";

export const fetchQrValue = async () => {
  try {
    const response = await api.get("/users/my-qr");
    return response.data.data.qrCodeValue;
  } catch (error) {
    console.error("Qr error:", error);
    throw new Error("qr 정보조회 실패");
  }
};
