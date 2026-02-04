type HeaderProps = {
  onClick: (nextPath: 'TOP' | 'USERS') => void;
};

const Header = ({ onClick }: HeaderProps) => {
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
    </header>
  );
};

export default Header;
