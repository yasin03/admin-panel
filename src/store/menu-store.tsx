import { create } from "zustand";

interface MenuState {
  toggleSidebar: boolean;
  dashboardData: any;
  setToggleSidebar: (by: boolean) => void;
  setDashboardData: (by: any) => void;
}

const useMenuStore = create<MenuState>((set) => ({
  toggleSidebar: false,
  dashboardData: null,
  setToggleSidebar: (toggleSidebar) => set({ toggleSidebar }),
  setDashboardData: (dashboardData) => set({ dashboardData }),
}));

export default useMenuStore;
