import { memo } from 'react';
import { useLoginUser } from '@/hooks/useLoginUser';

const Home = memo(() => {
  const { loginUser } = useLoginUser();
  console.log(loginUser?.isAdmin);
  return <h2>Home</h2>;
});

export default Home;
