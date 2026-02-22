import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import type { User2 } from '@/types/user2';

type LoginUser =
  | { loginUser: User2 | null; setLoginUser: Dispatch<SetStateAction<User2 | null>> }
  | undefined;

const LoginUserContext = createContext<LoginUser>(undefined);

export const LoginUserProvider = ({ children }: { children: React.ReactNode }) => {
  const [loginUser, setLoginUser] = useState<User2 | null>(null);

  const value = useMemo(
    () => ({
      loginUser,
      setLoginUser,
    }),
    [loginUser],
  );

  return <LoginUserContext value={value}>{children}</LoginUserContext>;
};

export const useLoginUser = () => {
  const context = useContext(LoginUserContext);

  if (context === undefined) {
    throw new Error('context is undefined');
  }

  const { loginUser, setLoginUser } = context;

  return { loginUser, setLoginUser };
};
