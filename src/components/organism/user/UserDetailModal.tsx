import UserCardModal from '@/components/organism/user/UserCardModal';
import type { User2 } from '@/types/user2';

interface UserDetailModalProps {
  user: User2 | null;
  isOpen: boolean;
  onClose: () => void;
}

const UserDetailModal = ({ user, isOpen, onClose }: UserDetailModalProps) => {
  if (!user || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex justify-center items-center p-4">
      <button
        type="button"
        onClick={onClose}
        tabIndex={-1}
        aria-label="Close modal"
        className="fixed inset-0 h-full w-full bg-black/50 cursor-default"
      />

      <div className="relative z-10 bg-white max-w-md w-full rounded-md">
        <UserCardModal user={user} onClose={onClose} />
      </div>
    </div>
  );
};

export default UserDetailModal;
