import { PAGES_MAP } from '@/constants/pages';
import { usePath } from '@/hooks/usePath';

const Section12 = () => {
  const { path } = usePath();

  const PageComponent = PAGES_MAP[path];

  if (!PageComponent) {
    throw new Error('unexpected path');
  }

  return (
    <div>
      <PageComponent />
    </div>
  );
};

export default Section12;
