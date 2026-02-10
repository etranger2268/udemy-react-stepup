import { Menu } from 'lucide-react';
import { memo, useState } from 'react';
import Drawer from '@/components/Drawer';
import { usePath } from '@/hooks/usePath';
import type { PathType } from '@/types/path';

const Header = memo(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const { changePath } = usePath();
  const handleClickPath = (nextPath: PathType, isDrawer = false) => {
    if (isDrawer) {
      changePath(nextPath);
      toggle();
    } else {
      changePath(nextPath);
    }
  };
  return (
    <header className="bg-white border-b border-slate-200 h-full flex items-center">
      <nav className="p-3 md:p-6 flex w-full items-center justify-between">
        <button
          type="button"
          onClick={() => handleClickPath('/')}
          className="text-base md:text-lg font-semibold transition-all duration-300 hover:opacity-75"
        >
          ユーザー管理アプリ
        </button>
        <div className="gap-8 hidden md:flex">
          <button
            type="button"
            onClick={() => handleClickPath('/user-management')}
            className="text-sm md:text-base font-medium transition-all duration-300 hover:opacity-75 hover:underline"
          >
            ユーザー一覧
          </button>
          <button
            type="button"
            onClick={() => handleClickPath('/setting')}
            className="text-sm md:text-base font-medium transition-all duration-300 hover:opacity-75 hover:underline"
          >
            設定
          </button>
        </div>
        <div className="block md:hidden">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center p-2 rounded-md transition-all duration-300 hover:opacity-75"
          >
            <Menu />
          </button>
          <Drawer isOpen={isOpen} onClose={toggle}>
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
      </nav>
    </header>
  );
});

export default Header;
