import { memo } from 'react';
import Card from '@/components/atom/card/Card';
import UserIconWithNameContext from '@/components/molecule/user/UserIconWithNameContext';

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
};

const UserCardContext = memo(
  ({ user: { image, name, email, tel, company, website } }: UserCardProps) => {
    return (
      <Card>
        <div className="mb-2">
          <UserIconWithNameContext image={image} name={name} />
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
  },
);

export default UserCardContext;
