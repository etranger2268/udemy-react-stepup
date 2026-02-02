import { memo } from 'react';
import { Fragment } from 'react/jsx-runtime';

type ChildAreaProps = {
  isOpen: boolean;
};

const ChildArea = memo(({ isOpen }: ChildAreaProps) => {
  console.log('--- ChildArea ---');
  console.log([...Array(1000).keys()]);
  return (
    <Fragment>
      {isOpen ? (
        <div>
          <h1>ChildArea</h1>
        </div>
      ) : null}
    </Fragment>
  );
});

export default ChildArea;
