import Card from '@/components/atom/card/Card';
import UserIconWithName from '@/components/molecule/user/UserIconWithName';

type UserCardProps = {
  user: {
    image: string;
    name: string;
    email: string;
    tel: string;
    company: {
      name: string;
    };
    website: string;
  };
  isAdmin?: boolean;
};

const UserCard = ({
  user: { image, name, email, tel, company, website },
  isAdmin,
}: UserCardProps) => {
  return (
    <Card>
      <div className="mb-2">
        <UserIconWithName image={image} name={name} isAdmin={isAdmin} />
      </div>
      <div className="text-sm font-medium text-gray-600">
        <ul className="flex flex-col items-start">
          <li className="flex">
            <p className="w-14 text-left">メール:</p>
            <p>{email}</p>
          </li>
          <li className="flex">
            <p className="w-14 text-left">TEL:</p>
            <p>{tel}</p>
          </li>
          <li className="flex">
            <p className="w-14 text-left">会社名:</p>
            <p>{company.name}</p>
          </li>
          <li className="flex">
            <p className="w-14 text-left">WEB:</p>
            <p>{website}</p>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default UserCard;
