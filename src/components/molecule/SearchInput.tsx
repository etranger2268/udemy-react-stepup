import { memo } from 'react';
import Button from '@/components/atom/button/Button';
import Input from '@/components/atom/input/Input';

const SearchInput = memo(() => {
  return (
    <div className="flex items-center gap-1">
      <Input />
      <Button variant="primary">Search</Button>
    </div>
  );
});

export default SearchInput;
