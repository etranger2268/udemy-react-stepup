import { Fragment } from 'react/jsx-runtime';

type ChildAreaProps = {
  isOpen: boolean;
};

const ChildArea = ({ isOpen }: ChildAreaProps) => {
  console.log('--- ChildArea ---');
  return (
    <Fragment>
      {isOpen ? (
        <div>
          <h1>ChildArea</h1>
        </div>
      ) : null}
      ;
    </Fragment>
  );
};

export default ChildArea;
