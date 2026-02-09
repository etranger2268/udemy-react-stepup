const Section10 = () => {
  const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!res.ok) {
      throw new Error('Todos fetch Error');
    }
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <button
        type="button"
        className="py-2 px-4 text-sm font-semibold bg-blue-500 text-white rounded-md transition-all duration-300 hover:opacity-75"
        onClick={fetchTodos}
      >
        データ取得
      </button>
    </div>
  );
};

export default Section10;
