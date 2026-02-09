import UserCard from '@/components/UserCard';
import { useAllUsers } from '@/hooks/useAllUsers';

const Section11 = () => {
  const { userProfiles, isLoading, error, fetchUserProfile } = useAllUsers();

  return (
    <div className="space-y-2">
      <div>
        <button
          type="button"
          className={`py-2 px-4 rounded-md text-white text-sm font-semibold transition-all duration-300 hover:opacity-75 ${isLoading ? 'bg-gray-300' : 'bg-blue-500'}`}
          onClick={fetchUserProfile}
        >
          データ取得
        </button>
      </div>
      <div>
        {error ? (
          <p className="text-red-500 font-semibold">{error}</p>
        ) : isLoading ? (
          <p className="font-semibold text-gray-500">Loading...</p>
        ) : Array.isArray(userProfiles) ? (
          <div className="grid grid-cols-3 gap-3">
            {userProfiles.map((userProfile) => (
              <UserCard key={userProfile.id} user={userProfile} />
            ))}
          </div>
        ) : (
          <p className="font-semibold text-gray-500">データを取得してください</p>
        )}
      </div>
    </div>
  );
};

export default Section11;
