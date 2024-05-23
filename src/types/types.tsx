export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  submenuItems?: SideNavItem[];
};

export interface DashboardData {
  title: string;
  due_date: string;
  assigned_to: string;
  description: string;
  status: string;
  key: string;
}