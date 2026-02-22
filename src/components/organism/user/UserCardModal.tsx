import { useState } from 'react';
import { useLoginUser } from '@/hooks/useLoginUser';
import type { User2 } from '@/types/user2';

interface UserCardModalProps {
  user: User2;
  onClose: () => void;
}

const UserCardModal = ({ user, onClose }: UserCardModalProps) => {
  const { loginUser } = useLoginUser();
  const [name, setName] = useState<string>(user.name);
  const [username, setUsername] = useState<string>(user.username);
  const [email, setEmail] = useState<string>(user.email);
  const [phone, setPhone] = useState<string>(user.phone);
  const isAdmin = loginUser?.isAdmin ?? false;
  return (
    <div className="m-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">ユーザー詳細</h2>
        <button
          type="button"
          onClick={onClose}
          className="bg-black text-white size-7 rounded-md inline-flex items-center justify-center text-sm font-semibold transition-opacity duration-300 hover:opacity-75"
        >
          ×
        </button>
      </div>
      <div className="m-4">
        <div className="flex gap-3 flex-col">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold">
              名前
            </label>
            <input
              id="name"
              type="text"
              readOnly={!isAdmin}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
              className="border rounded-md py-1 px-3 text-sm font-medium bg-transparent focus:outline-none focus:ring focus:ring-blue-500"
              value={name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm font-semibold">
              フルネーム
            </label>
            <input
              id="username"
              type="text"
              readOnly={!isAdmin}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.currentTarget.value)
              }
              className="border rounded-md py-1 px-3 text-sm font-medium bg-transparent focus:outline-none focus:ring focus:ring-blue-500"
              value={username}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              readOnly={!isAdmin}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
              className="border rounded-md py-1 px-3 text-sm font-medium bg-transparent focus:outline-none focus:ring focus:ring-blue-500"
              value={email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="tel" className="text-sm font-semibold">
              TEL
            </label>
            <input
              id="tel"
              type="text"
              readOnly={!isAdmin}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.currentTarget.value)}
              className="border rounded-md py-1 px-3 text-sm font-medium bg-transparent focus:outline-none focus:ring focus:ring-blue-500"
              value={phone}
            />
          </div>
          {isAdmin && (
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-blue-500 text-white text-sm font-medium py-1 px-3 rounded-md transition-opacity duration-300 hover:opacity-75"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCardModal;
