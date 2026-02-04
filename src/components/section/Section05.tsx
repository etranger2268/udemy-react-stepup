import Button from '@/components/atom/button/Button';
import SearchInput from '@/components/molecule/SearchInput';
import UserCard from '@/components/organism/user/UserCard';

const Section05 = () => {
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
        <UserCard />
      </div>
    </main>
  );
};

export default Section05;
