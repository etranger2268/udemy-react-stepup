type InputProps = {
  placeholder?: string;
};

const Input = ({ placeholder = 'input...' }: InputProps) => {
  return (
    <div className="flex-1">
      <input
        type="text"
        className="border w-full py-1 px-3 text-sm rounded-md font-medium shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
