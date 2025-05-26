import { create } from "zustand";
import { persist } from "zustand/middleware";

type Role = "USER" | "OWNER" | "STAFF" | null;

interface RoleStore {
  role: "USER" | "OWNER" | "STAFF" | null;
  setRole: (role: Role) => void;
}

export const useRoleStore = create<RoleStore>()(
  persist(
    set => ({
      role: "USER",
      setRole: role => set({ role }),
    }),
    {
      name: "role-storage",
    }
  )
);
