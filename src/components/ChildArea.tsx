import { memo } from 'react';
import { Fragment } from 'react/jsx-runtime';

type ChildAreaProps = {
  buttonText: string;
  onClick: () => void;
  isOpen: boolean;
};

const ChildArea = memo(({ buttonText, onClick, isOpen }: ChildAreaProps) => {
  console.log('--- ChildArea ---');
  console.log([...Array(1000).keys()]);
  return (
    <Fragment>
      <div>
        {isOpen && <h1>ChildArea</h1>}
        <button
          type="button"
          onClick={onClick}
          className="w-20 py-2 px-4 border text-sm rounded bg-red-500 text-white font-semibold transition-colors duration-300 hover:opacity-75"
        >
          {buttonText}
        </button>
      </div>
    </Fragment>
  );
});

export default ChildArea;
