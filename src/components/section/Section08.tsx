const Section08 = () => {
  const handleUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      throw new Error('Users fetch Error');
    }
    const data = await res.json();
    console.log(data);
  };

  const handleUsersId1 = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!res.ok) {
      throw new Error('Users?id=1 fetch Error');
    }
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-around">
        <button
          type="button"
          onClick={handleUser}
          className="py-2 px-4 bg-blue-500 rounded-md text-white font-semibold text-sm transition-all duration-300 hover:opacity-75"
        >
          Users
        </button>
        <button
          type="button"
          onClick={handleUsersId1}
          className="py-2 px-4 bg-blue-500 rounded-md text-white font-semibold text-sm transition-all duration-300 hover:opacity-75"
        >
          Users?id=1
        </button>
      </div>
    </div>
  );
};

export default Section08;
