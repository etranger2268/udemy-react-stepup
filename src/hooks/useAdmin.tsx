import { createContext } from 'react';

type Admin = { isAdminContext: boolean } | undefined;
type AdminProviderProps = Readonly<{ children: React.ReactNode }>;

export const AdminContext = createContext<Admin>(undefined);

export const AdminProvider = ({ children }: AdminProviderProps) => {
  const isAdminContext = true;
  return <AdminContext value={{ isAdminContext }}>{children}</AdminContext>;
};
