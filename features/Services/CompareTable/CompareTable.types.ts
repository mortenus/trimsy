export type TServiceData = {
  service: string;
  href: string;
  icon: string;
  pricing: number | null;
  children: React.ReactNode;
};

export interface TService {
  //   servicesData: TServiceData[];
  currentActive?: string;
}
