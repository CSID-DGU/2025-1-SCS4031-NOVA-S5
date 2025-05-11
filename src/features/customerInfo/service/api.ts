import api from "@/shared/api/axios";

export const getCustomerInfo = async (qrCodeValue: string) => {
  const response = await api.get("/staff/stamps", {
    params: { qrCodeValue },
  });
  return response.data.data;
};
