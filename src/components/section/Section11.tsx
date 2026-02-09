import { useState } from 'react';
import UserCard from '@/components/UserCard';
import type { UserProfileType, UserType } from '@/types/userProfile';

const Section11 = () => {
  const [userProfiles, setUserProfiles] = useState<UserProfileType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchUserProfile = async () => {
    setIsLoading(true);
    setError('');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      setError('UserProfile fetch Error');
    }
    const data: UserProfileType[] = (await res.json()).map((user: UserType) => ({
      id: user.id,
      name: `${user.name} (${user.username})`,
      email: user.email,
      address: `${user.address.city}${user.address.suite}${user.address.street}`,
    }));

    setUserProfiles(data);
    setIsLoading(false);
  };

  return (
    <div className="space-y-2">
      <div>
        <button
          type="button"
          className={`py-2 px-4 rounded-md text-white text-sm font-semibold transition-all duration-300 hover:opacity-75 ${isLoading ? 'bg-gray-300' : 'bg-blue-500'}`}
          onClick={fetchUserProfile}
        >
          データ取得
        </button>
      </div>
      <div>
        {error ? (
          <p className="text-red-500 font-semibold">{error}</p>
        ) : isLoading ? (
          <p className="font-semibold text-gray-500">Loading...</p>
        ) : Array.isArray(userProfiles) ? (
          <div className="grid grid-cols-3 gap-3">
            {userProfiles.map((userProfile) => (
              <UserCard key={userProfile.id} user={userProfile} />
            ))}
          </div>
        ) : (
          <p className="font-semibold text-gray-500">データを取得してください</p>
        )}
      </div>
    </div>
  );
};

export default Section11;
