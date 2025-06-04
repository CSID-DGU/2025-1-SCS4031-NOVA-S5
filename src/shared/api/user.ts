import api from "./axios";

export const getUserInfo = async () => {
  const response = await api.get("/users/status");

  return response.data.data;
};
