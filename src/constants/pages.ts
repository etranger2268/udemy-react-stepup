import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import Setting from '@/components/pages/Setting';
import UserManagement from '@/components/pages/UserManagement';

export const PAGES_MAP = {
  '/': Login,
  '/home': Home,
  '/user-management': UserManagement,
  '/setting': Setting,
};
