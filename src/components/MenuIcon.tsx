import { Menu } from 'lucide-react';

type MenuIconProps = { toggle: () => void };

const MenuIcon = ({ toggle }: MenuIconProps) => {
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center p-2 rounded-md transition-all duration-300 hover:opacity-75"
    >
      <Menu />
    </button>
  );
};

export default MenuIcon;
