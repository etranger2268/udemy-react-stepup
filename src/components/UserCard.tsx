import type { UserProfileType } from '@/types/userProfile';

type UserCardProps = {
  user: UserProfileType;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="mx-auto border rounded-md shadow">
      <div className="w-sm py-4 px-4 text-left text-sm space-y-1">
        <div className="flex gap-1">
          <p className="w-10">名前:</p>
          <p>{user.name}</p>
        </div>
        <div className="flex gap-1">
          <p className="w-10">メール:</p>
          <p>{user.email}</p>
        </div>
        <div className="flex gap-1">
          <p className="w-10">住所:</p>
          <p>{user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
