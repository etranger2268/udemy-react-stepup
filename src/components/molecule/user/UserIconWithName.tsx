type UserIconWithName = {
  image: string;
  name: string;
};

const UserIconWithName = ({ image, name }: UserIconWithName) => {
  return (
    <>
      <img src={image} alt="profile" className="h-25 w-37.5" />
      <h3 className="text-base font-semibold">{name}</h3>
    </>
  );
};

export default UserIconWithName;
