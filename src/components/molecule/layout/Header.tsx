import { memo } from 'react';

type HeaderProps = {
  onClick: (nextPath: 'TOP' | 'USERS' | 'ADMIN' | 'ADMIN_CONTEXT') => void;
};

const Header = memo(({ onClick }: HeaderProps) => {
  return (
    <header className="flex justify-center items-center gap-4 text-blue-500 mb-4">
      <button
        type="button"
        onClick={() => onClick('TOP')}
        className="hover:text-blue-800 hover:cursor-pointer"
      >
        TOP
      </button>
      <button
        type="button"
        onClick={() => onClick('USERS')}
        className="hover:text-blue-800 hover:cursor-pointer"
      >
        USERS
      </button>
      <button
        type="button"
        onClick={() => onClick('ADMIN')}
        className="hover:text-blue-800 hover:cursor-pointer"
      >
        ADMIN
      </button>
      <button
        type="button"
        onClick={() => onClick('ADMIN_CONTEXT')}
        className="hover:text-blue-800 hover:cursor-pointer"
      >
        ADMIN_CONTEXT
      </button>
    </header>
  );
});

export default Header;
