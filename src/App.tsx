// import Section03 from '@/components/section/Section03';
// import Section04 from '@/components/section/Section04';
// import Section05 from '@/components/section/Section05';
// import Section08 from '@/components/section/Section08';
// import Section10 from '@/components/section/Section10';
// import Section11 from '@/components/section/Section11';

import { Toaster } from 'sonner';
import Section12 from '@/components/section/Section12';
import { PathProvider } from '@/hooks/usePath';

export default function App() {
  return (
    <div>
      {/* <div className="flex flex-col justify-center pt-6 gap-4 max-w-7xl mx-auto text-center"> */}
      {/* <Section03 /> */}
      {/* <Section04 /> */}
      {/* <Section05 /> */}
      {/* <Section08 /> */}
      {/* <Section10 /> */}
      {/* <Section11 /> */}
      {/* </div> */}
      <div>
        <PathProvider>
          <Toaster position="top-center" richColors />
          <Section12 />
        </PathProvider>
      </div>
    </div>
  );
}
