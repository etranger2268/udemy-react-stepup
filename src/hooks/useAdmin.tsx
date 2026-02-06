import { createContext, useState } from 'react';

type Admin = { isAdminContext: boolean; toggleIsAdminContext: () => void } | undefined;
type AdminProviderProps = Readonly<{ children: React.ReactNode }>;

export const AdminContext = createContext<Admin>(undefined);

export const AdminProvider = ({ children }: AdminProviderProps) => {
  const [isAdminContext, setIsAdminContext] = useState(true);
  const toggleIsAdminContext = () => setIsAdminContext((prev) => !prev);
  return <AdminContext value={{ isAdminContext, toggleIsAdminContext }}>{children}</AdminContext>;
};
