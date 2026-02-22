interface UserCard2Props {
  name: string;
  username: string;
}

const UserCard2 = ({ name, username }: UserCard2Props) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full">
      <img src="victor-g-N04FIfHhv_k-unsplash.jpg" alt="profile pic" className="w-50" />
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm font-medium text-gray-500">@{username}</p>
    </div>
  );
};

export default UserCard2;
