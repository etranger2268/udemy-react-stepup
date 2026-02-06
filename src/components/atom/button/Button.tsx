import { memo } from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondly' | 'default';
  children: React.ReactNode;
};

const Button = memo(({ variant, children }: ButtonProps) => {
  const color =
    variant === 'primary'
      ? 'bg-blue-500 text-white'
      : variant === 'secondly'
        ? 'bg-blue-100'
        : variant === 'default'
          ? 'bg-red-500 text-white'
          : 'bg-white border ';
  return (
    <button
      type="button"
      className={`py-2 px-4 rounded-md ${color} text-sm font-semibold transition-colors duration-300 hover:opacity-75`}
    >
      {children}
    </button>
  );
});

export default Button;
