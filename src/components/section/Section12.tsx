import Header from '@/components/Header';
import NotFound from '@/components/pages/NotFound';
import { PAGES_MAP } from '@/constants/pages';
import { LoginUserProvider } from '@/hooks/useLoginUser';
import { usePath } from '@/hooks/usePath';

const Section12 = () => {
  const { path } = usePath();

  const PageComponent = PAGES_MAP[path];

  if (!PageComponent) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return (
    <LoginUserProvider>
      <div className="flex flex-col h-screen">
        <div>
          <Header />
        </div>
        <div className="flex-1">
          <div className="bg-slate-50 flex-1 h-full">
            <PageComponent />
          </div>
        </div>

        <div className="h-12">
          <footer className="bg-slate-900 h-full flex items-center justify-center">
            <p className="text-sm font-semibold text-slate-50">
              &copy; 2026 etranger2268, All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </LoginUserProvider>
  );
};

export default Section12;
