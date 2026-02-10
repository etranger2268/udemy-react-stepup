import Drawer from '@/components/Drawer';
import MenuIcon from '@/components/MenuIcon';
import type { PathType } from '@/types/path';

type MenuDrawerProps = {
  toggle: () => void;
  isOpen: boolean;
  handleClickPath: (nextPath: PathType, isDrawer: boolean) => void;
  changePath: (nextPath: PathType) => void;
};

const MenuDrawer = ({ toggle, isOpen, handleClickPath, changePath }: MenuDrawerProps) => {
  return (
    <div className="block md:hidden">
      <MenuIcon toggle={toggle} />
      <Drawer isOpen={isOpen} onClose={toggle}>
        <button
          type="button"
          onClick={() => handleClickPath('/home', true)}
          className="block w-full text-left py-2 px-4 text-sm font-medium transition-all duration-300 hover:bg-slate-100 hover:opacity-75"
        >
          HOME
        </button>
        <button
          type="button"
          onClick={() => handleClickPath('/user-management', true)}
          className="block w-full text-left py-2 px-4 text-sm font-medium transition-all duration-300 hover:bg-slate-100 hover:opacity-75"
        >
          ユーザー一覧
        </button>
        <button
          type="button"
          onClick={() => changePath('/setting')}
          className="block w-full text-left py-2 px-4 text-sm font-medium transition-all duration-300 hover:bg-slate-100 hover:opacity-75"
        >
          設定
        </button>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
