import { create } from "zustand";

type Role = "USER" | "OWNER" | "STAFF";

interface RoleStore {
  role: Role;
  setRole: (role: Role) => void;
}

export const useRoleStore = create<RoleStore>(set => ({
  role: "USER",
  setRole: role => set({ role }),
}));
