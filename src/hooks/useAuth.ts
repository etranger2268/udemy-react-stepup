import { type ChangeEvent, useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { authAction, type State } from '@/action/authAction';
import { useLoginUser } from '@/hooks/useLoginUser';
import { usePath } from '@/hooks/usePath';
import type { User2 } from '@/types/user2';

type UseAuthReturn = {
  userId: string;
  handleChangeUserId: (e: ChangeEvent<HTMLInputElement>) => void;
  formAction: (payload: FormData) => void;
  state: State;
  loading: boolean;
};

export const useAuth = (): UseAuthReturn => {
  const { setLoginUser } = useLoginUser();
  const { changePath } = usePath();
  const [userId, setUserId] = useState('');

  const handleChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.currentTarget.value);

  const [state, formAction, loading] = useActionState(authAction, { success: false, data: null });

  useEffect(() => {
    if (state?.success && state.data) {
      const loginData: User2 = {
        ...state.data,
        isAdmin: String(state.data.id) === '10',
      };
      setLoginUser(loginData);
      toast.success('ログインに成功しました');

      changePath('/home');
    }
  }, [state, setLoginUser, changePath]);

  return { userId, handleChangeUserId, formAction, state, loading };
};
