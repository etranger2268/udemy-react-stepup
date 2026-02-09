import { useState } from 'react';
import type { UserProfileType, UserType } from '@/types/userProfile';

type UseAllUsersReturn = {
  userProfiles: UserProfileType[] | null;
  isLoading: boolean;
  error: string;
  fetchUserProfile: () => void;
};

export const useAllUsers = (): UseAllUsersReturn => {
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

  return { userProfiles, isLoading, error, fetchUserProfile };
};
