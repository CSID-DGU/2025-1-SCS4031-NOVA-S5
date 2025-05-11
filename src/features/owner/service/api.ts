import api from "@/shared/api/axios";

export const getMyCafe = async () => {
  const response = await api.get("/staff/cafes/my");
  return response.data.data;
};

export const chooseCafe = async (cafeId: string) => {
  const response = await api.put(`/staff/cafes/${cafeId}/selected`);
  return response.data;
};
