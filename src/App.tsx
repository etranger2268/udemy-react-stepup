import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => setCount((prev) => prev + 1);
  console.log('App');

  return (
    <div className="flex flex-col justify-center pt-6 gap-4 max-w-md mx-auto text-center">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-4xl font-bold">Hello Vite</h1>
        <h2 className="text-2xl font-semibold">Start editing to see some magic happen!</h2>
      </div>
      <div className="space-y-2">
        <p className="text-lg">{count}</p>
        <button
          type="button"
          onClick={handleClick}
          className="py-2 px-4 border text-sm font-semibold rounded bg-sky-500 text-white transition-colors duration-300 hover:opacity-75"
        >
          count up
        </button>
      </div>
    </div>
  );
}
