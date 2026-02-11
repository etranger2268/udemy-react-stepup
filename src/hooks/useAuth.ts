import { type ChangeEvent, useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { authAction, type State } from '@/action/authAction';
import { usePath } from '@/hooks/usePath';

type UseAuthReturn = {
  userId: string;
  handleChangeUserId: (e: ChangeEvent<HTMLInputElement>) => void;
  formAction: (payload: FormData) => void;
  state: State;
  loading: boolean;
};

export const useAuth = (): UseAuthReturn => {
  const { changePath } = usePath();
  const [userId, setUserId] = useState('');

  const handleChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.currentTarget.value);

  const [state, formAction, loading] = useActionState(authAction, { success: false });

  useEffect(() => {
    if (state?.success) {
      toast.success('ログインに成功しました');

      changePath('/home');
    }
  }, [state?.success, changePath]);

  return { userId, handleChangeUserId, formAction, state, loading };
};
