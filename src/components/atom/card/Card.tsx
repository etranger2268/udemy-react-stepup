type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="border rounded-md shadow-xl p-6 flex flex-col items-center justify-center wrap-break-word">
      {children}
    </div>
  );
};

export default Card;
