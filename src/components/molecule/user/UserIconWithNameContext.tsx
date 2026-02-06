import { useContext } from 'react';
import { AdminContext } from '@/hooks/useAdmin';

type UserIconWithName = {
  image: string;
  name: string;
};

const UserIconWithNameContext = ({ image, name }: UserIconWithName) => {
  const admin = useContext(AdminContext);

  if (!admin?.isAdminContext) {
    throw new Error('unexpecterd error');
  }

  return (
    <>
      <img src={image} alt="profile" className="h-25 w-37.5" />
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-base font-semibold">{name}</h3>
        {admin.isAdminContext && (
          <button
            type="button"
            className="py-1 px-2 text-sm font-semibold text-white bg-gray-600 rounded-md transition-all duration-300 hover:opacity-75"
            onClick={() => console.log('Edit')}
          >
            Edit
          </button>
        )}
      </div>
    </>
  );
};

export default UserIconWithNameContext;
