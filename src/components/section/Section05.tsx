import Button from '@/components/atom/button/Button';

const Section05 = () => {
  return (
    <main>
      <div className="flex flex-col gap-2 border rounded py-2">
        <h1 className="text-lg font-bold text-gray-800">atom</h1>
        <div className="flex gap-3 justify-center">
          <Button variant="primary">primary</Button>
          <Button variant="secondly">secondly</Button>
          <Button variant="default">default</Button>
        </div>
      </div>
    </main>
  );
};

export default Section05;
