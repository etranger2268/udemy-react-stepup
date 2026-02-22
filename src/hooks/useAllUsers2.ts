import { useCallback, useState } from 'react';
import type { User2 } from '@/types/user2';

export const useAllUsers2 = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User2[] | null>(null);

  const getAllUsers = useCallback(async () => {
    setLoading(true);
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      setLoading(false);
      throw new Error('Failed to fetch users');
    }
    const data = (await res.json()) as User2[];
    setUsers(data);
    setLoading(false);
  }, []);

  return { loading, users, getAllUsers };
};
