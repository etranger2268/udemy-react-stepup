import { useContext, useState } from 'react';
import Button from '@/components/atom/button/Button';
import SearchInput from '@/components/molecule/SearchInput';
import UserCard from '@/components/organism/user/UserCard';
import UserCardContext from '@/components/organism/user/UserCardContext';
import DefaultLayout from '@/components/template/DefaultLayout';
import HeaderOnlyLayout from '@/components/template/HeaderOnlyLayout';
import { AdminContext, AdminProvider } from '@/hooks/useAdmin';

const users = [...Array(10).keys()].map((key) => ({
  key,
  image: '/victor-g-N04FIfHhv_k-unsplash.jpg',
  name: `etranger2268-${key}`,
  email: '123@gmail.com',
  tel: '0120-0000-000',
  company: {
    name: '123株式会社',
  },
  website: '123.com',
}));

const Section05 = () => {
  const [path, setPath] = useState<'TOP' | 'USERS' | 'ADMIN' | 'ADMIN_CONTEXT'>('TOP');
  const isAdmin = path === 'ADMIN';
  const handleSetPath = (nextPath: 'TOP' | 'USERS' | 'ADMIN' | 'ADMIN_CONTEXT') => {
    if (path === nextPath) {
      return;
    }
    setPath(nextPath);
  };

  if (path === 'TOP') {
    return (
      <DefaultLayout onClick={handleSetPath}>
        <div className="mb-2">
          <h1 className="text-xl font-bold">TOPページ</h1>
        </div>
      </DefaultLayout>
    );
  }

  if (path === 'USERS' || path === 'ADMIN') {
    return (
      <HeaderOnlyLayout onClick={handleSetPath}>
        <div className="mb-2">
          <h1 className="text-xl font-bold">ユーザー一覧</h1>
        </div>
        <Section05Content isAdmin={isAdmin} />
      </HeaderOnlyLayout>
    );
  }

  if (path === 'ADMIN_CONTEXT') {
    return (
      <AdminProvider>
        <HeaderOnlyLayout onClick={handleSetPath}>
          <div className="mb-2">
            <h1 className="text-xl font-bold">ユーザー一覧</h1>
          </div>
          <Section05ContentContext />
        </HeaderOnlyLayout>
      </AdminProvider>
    );
  }

  return <p>pathが不適切です。</p>;
};

type Section05ContentProps = {
  isAdmin?: boolean;
};

function Section05Content({ isAdmin }: Section05ContentProps) {
  return (
    <main className="space-y-4">
      <div className="flex flex-col gap-2 border rounded py-2">
        <h2 className="text-lg font-bold text-gray-800">atom</h2>
        <div className="flex gap-3 justify-center">
          <Button variant="primary">primary</Button>
          <Button variant="secondly">secondly</Button>
          <Button variant="default">default</Button>
        </div>
      </div>
      <div className="border rounded p-2">
        <h2 className="text-lg font-bold text-gray-800">molecule</h2>
        <SearchInput />
      </div>
      <div className="border rounded p-2">
        <h2 className="text-lg font-bold text-gray-800">organism</h2>
        <div className="grid grid-cols-2 gap-4">
          {users.map((user) => (
            <UserCard key={user.key} user={user} isAdmin={isAdmin} />
          ))}
        </div>
      </div>
    </main>
  );
}

function Section05ContentContext() {
  const admin = useContext(AdminContext);

  if (admin === undefined) {
    throw new Error('unexpected error');
  }

  return (
    <main className="space-y-4">
      <div className="flex flex-col gap-2 border rounded py-2">
        <h2 className="text-lg font-bold text-gray-800">atom</h2>
        <div className="flex gap-3 justify-center">
          <Button variant="primary">primary</Button>
          <Button variant="secondly">secondly</Button>
          <Button variant="default">default</Button>
        </div>
      </div>
      <div className="border rounded p-2">
        <h2 className="text-lg font-bold text-gray-800">molecule</h2>
        <SearchInput />
      </div>
      <div className="border rounded p-2 space-y-2">
        <h2 className="text-lg font-bold text-gray-800">organism</h2>
        <button
          type="button"
          onClick={admin.toggleIsAdminContext}
          className="w-40 py-2 px-4 text-sm font-semibold bg-green-500 text-white rounded-md transition-all duration-300 hover:opacity-75"
        >
          {admin.isAdminContext ? 'you are admin' : 'you are not admin'}
        </button>
        <div className="grid grid-cols-2 gap-4">
          {users.map((user) => (
            <UserCardContext key={user.key} user={user} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Section05;
