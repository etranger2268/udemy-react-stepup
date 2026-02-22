import { memo, useEffect } from 'react';
import UserCard2 from '@/components/organism/user/UserCard2';
import { useAllUsers2 } from '@/hooks/useAllUsers2';

const UserManagement = memo(() => {
  const { getAllUsers, loading, users } = useAllUsers2();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await getAllUsers();
      } catch (e) {
        console.error(e);
      }
    };
    fetchUsers();
  }, [getAllUsers]);

  return (
    <div className="p-2 md:p-5">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {loading ? (
          <div className="flex h-full justify-center items-center gap-2">
            <div className="animate-spin size-5 border-2 rounded-full border-t-transparent border-green-500"></div>
            <p>Loading...</p>
          </div>
        ) : users && users.length > 0 ? (
          users.map((user) => (
            <button
              key={user.id}
              type="button"
              className="w-65 h-65 bg-white shadow rounded-md hover:opacity-75 flex flex-col items-center justify-center p-4"
            >
              <UserCard2 name={user.name} username={user.username} />
            </button>
          ))
        ) : (
          <p className="text-red-500">Users not found</p>
        )}
      </div>
    </div>
  );
});

export default UserManagement;
