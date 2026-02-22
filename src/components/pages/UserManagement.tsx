import { memo } from 'react';
import UserCard2 from '@/components/organism/user/UserCard2';

const UserManagement = memo(() => {
  return (
    <div className="m-1 md:m-2.5">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-2">
        <button type="button" className="w-65 h-65 bg-white shadow rounded-md hover:opacity-75">
          <UserCard2 name="etranger2268" username="etranger2268" />
        </button>
      </div>
    </div>
  );
});

export default UserManagement;
