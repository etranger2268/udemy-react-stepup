import { memo } from 'react';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Drawer = memo(({ isOpen, onClose, children }: DrawerProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-gray-500 opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 w-50 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </>
  );
});

export default Drawer;
