import Footer from '@/components/molecule/layout/Footer';
import Header from '@/components/molecule/layout/Header';

type DefaultLayoutProps = {
  onClick: (nextPath: 'TOP' | 'USERS') => void;
  children: React.ReactNode;
};

const DefaultLayout = ({ onClick, children }: DefaultLayoutProps) => {
  return (
    <div>
      <Header onClick={onClick} />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
