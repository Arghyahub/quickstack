import { UserEntity } from "@/lib/entities/user-entity";
import { create } from "zustand";
export interface UserStoreType {
  User: UserEntity;
  setUser: (user: UserEntity) => void;
  setSomeUser: (obj: Partial<UserEntity>) => void;
  resetUser: () => void;
}

export const useUserStore = create<UserStoreType>()((set, get) => ({
  User: new UserEntity(),
  setUser: (User) => set({ User }),
  setSomeUser: (obj) => set({ User: { ...get().User, ...obj } }),
  resetUser: () => set({ User: new UserEntity() }),
}));

export default useUserStore;
