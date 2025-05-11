import { create } from "zustand";
import { persist } from "zustand/middleware";

type Role = "USER" | "OWNER" | "STAFF" | null;

interface RoleStore {
  role: "USER" | "OWNER" | "STAFF" | null;
  setRole: (role: Role) => void;
}

export const useRoleStore = create<RoleStore>()(
  // @ts-ignore: 왜 오류 생기는지 진짜 모르겠어서 나중에 알아내면 고침
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
