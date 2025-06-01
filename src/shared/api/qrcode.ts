import api from "./axios";

interface QrResponse {
  qrCodeValue: string;
  name: string;
}

export const fetchQrValue = async (): Promise<QrResponse> => {
  try {
    const response = await api.get<{
      status: number;
      message: string;
      data: QrResponse;
    }>("/users/my-qr");
    return response.data.data;
  } catch (error) {
    console.error("Qr error:", error);
    throw new Error("qr 정보조회 실패");
  }
};
