import { memo } from 'react';

const Login = memo(() => {
  return (
    <div className="flex justify-center items-center h-full">
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
            className="border py-1 px-3 rounded-md text-sm font-medium border-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="ユーザーID"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="bg-green-200 rounded-md py-1 text-sm font-medium w-full transition-all duration-300 hover:opacity-75"
          >
            ログイン
          </button>
        </div>
      </div>
    </div>
  );
});

export default Login;
