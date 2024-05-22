import { create } from "zustand";

interface MenuState {
  toggleSidebar: boolean;
  setToggleSidebar: (by: boolean) => void;
}

const useMenuStore = create<MenuState>((set) => ({
  toggleSidebar: false,
  setToggleSidebar: (toggleSidebar) => set({ toggleSidebar }),
}));

export default useMenuStore;
