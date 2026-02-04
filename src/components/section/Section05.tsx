import { useState } from 'react';
import Button from '@/components/atom/button/Button';
import SearchInput from '@/components/molecule/SearchInput';
import UserCard from '@/components/organism/user/UserCard';
import DefaultLayout from '@/components/template/DefaultLayout';
import HeaderOnlyLayout from '@/components/template/HeaderOnlyLayout';

const user = {
  image: '/victor-g-N04FIfHhv_k-unsplash.jpg',
  name: 'etranger2268',
  email: '123@gmail.com',
  tel: '0120-0000-000',
  company: {
    name: '123株式会社',
  },
  website: '123.com',
};

const Section05 = () => {
  const [path, setPath] = useState<'TOP' | 'USERS'>('TOP');
  const handleSetPath = (nextPath: 'TOP' | 'USERS') => {
    if (path === nextPath) {
      return;
    }
    setPath(nextPath);
  };

  if (path === 'TOP') {
    return (
      <DefaultLayout onClick={handleSetPath}>
        <Section05Content />
      </DefaultLayout>
    );
  }

  if (path === 'USERS') {
    return (
      <HeaderOnlyLayout onClick={handleSetPath}>
        <Section05Content />
      </HeaderOnlyLayout>
    );
  }

  return <p>pathが不適切です。</p>;
};

function Section05Content() {
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
        <UserCard user={user} />
      </div>
    </main>
  );
}

export default Section05;
