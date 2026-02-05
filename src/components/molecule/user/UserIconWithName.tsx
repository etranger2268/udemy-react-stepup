type UserIconWithName = {
  image: string;
  name: string;
  isAdmin?: boolean;
};

const UserIconWithName = ({ image, name, isAdmin }: UserIconWithName) => {
  return (
    <>
      <img src={image} alt="profile" className="h-25 w-37.5" />
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-base font-semibold">{name}</h3>
        {isAdmin && (
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

export default UserIconWithName;
