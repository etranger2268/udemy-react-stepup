import Header from '@/components/molecule/layout/Header';

type HeaderOnlyLayoutProps = {
  onClick: (nextPath: 'TOP' | 'USERS') => void;

  children: React.ReactNode;
};

const HeaderOnlyLayout = ({ onClick, children }: HeaderOnlyLayoutProps) => {
  return (
    <div>
      <Header onClick={onClick} />
      {children}
    </div>
  );
};

export default HeaderOnlyLayout;
