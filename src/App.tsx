import { type ChangeEvent, useCallback, useState } from 'react';
import ChildArea from '@/components/ChildArea';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttonText = isOpen ? '非表示' : '表示';

  const handleCountClick = () => setCount((prev) => prev + 1);
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
  const handleIsOpenClick = useCallback(() => setIsOpen((prev) => !prev), []);

  console.log('- App -');

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
          onClick={handleCountClick}
          className="py-2 px-4 border text-sm font-semibold rounded bg-sky-500 text-white transition-colors duration-300 hover:opacity-75"
        >
          count up
        </button>
        <div className="flex flex-col w-full mx-auto border p-4 rounded gap-2 min-h-40">
          <input
            type="text"
            value={value}
            onChange={handleTextChange}
            placeholder="Input..."
            className="border py-1 px-3 text-sm rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          <div>
            <ChildArea isOpen={isOpen} buttonText={buttonText} onClick={handleIsOpenClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
