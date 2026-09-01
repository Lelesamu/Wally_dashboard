export interface NavItem {
  id: number;
  label: string;
  menuOrder: string;
  menuType: string;
  hasChildren: boolean;
  route: string | null;
  icon: string | null;
  visible: boolean;
  translateKey: string | null;
}

export interface NavResponse {
  data: NavItem[];
  total: number;
}