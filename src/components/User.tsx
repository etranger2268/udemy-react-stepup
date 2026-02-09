import type { UserType } from '@/types/user';

type UserProps = {
  user: UserType;
};

const User = ({ user }: UserProps) => {
  const hobbies = user.hobbies === undefined ? 'なし' : user.hobbies.join(' / ');
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">プロフィール</h2>
      <div className="text-sm font-semibold">
        <p>名前: {user.name}</p>
        <p>趣味: {hobbies}</p>
      </div>
    </div>
  );
};

export default User;
