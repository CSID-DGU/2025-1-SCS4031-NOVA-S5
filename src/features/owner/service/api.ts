import api from "@/shared/api/axios";

export const getMyCafe = async () => {
  const response = await api.get("/staff/cafes/my");
  return response.data.data;
};

export const getSelectedCafe = async () => {
  const response = await api.get("/staff/cafes/selected");
  return response.data.data;
};

export const chooseCafe = async (cafeId: number) => {
  const response = await api.put(`/staff/cafes/${cafeId}/selected`);
  return response.data;
};
