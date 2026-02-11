import { type ChangeEvent, memo, useActionState, useEffect, useState } from 'react';
import { authAction } from '@/action/authAction';
import { usePath } from '@/hooks/usePath';

const Login = memo(() => {
  const { changePath } = usePath();
  const [userId, setUserId] = useState('');

  const handleChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.currentTarget.value);

  const [state, formAction, loading] = useActionState(authAction, { error: '', success: false });

  useEffect(() => {
    if (state?.success) {
      changePath('/home');
    }
  }, [state, changePath]);

  return (
    <div className="flex justify-center items-center h-full">
      <form action={formAction}>
        <div className="bg-white rounded-md shadow-md py-8 px-20 space-y-6">
          <h2 className="text-center text-xl font-bold pb-2 border-b border-gray-200">
            ユーザーIDでログイン
          </h2>
          <div className="space-y-2">
            <label htmlFor="userId" className="block text-sm font-medium">
              ユーザーID
            </label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={handleChangeUserId}
              className="border py-1 px-3 rounded-md text-sm font-medium border-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="ユーザーID"
            />
            <div className="h-2">
              {state.error && <p className="text-red-500 text-sm font-semibold">{state.error}</p>}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={loading || userId.length === 0}
              className="bg-green-200 rounded-md py-1 text-sm font-medium w-full transition-all duration-300 hover:opacity-75 disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              {loading ? '認証中' : 'ログイン'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
});

export default Login;
