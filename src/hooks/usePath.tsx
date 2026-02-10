import { createContext, useContext, useMemo, useState } from 'react';
import type { PathType } from '@/types/path';

type Path = { path: PathType; changePath: (path: PathType) => void } | undefined;
type PathProviderProps = Readonly<{ children: React.ReactNode }>;

const PathContext = createContext<Path>(undefined);

export const PathProvider = ({ children }: PathProviderProps) => {
  const [path, setPath] = useState<PathType>('/');
  const changePath = (newPath: PathType) => setPath(newPath);

  // biome-ignore lint: "changePath should not be included in the dependency array"
  const value = useMemo(
    () => ({
      path,
      changePath,
    }),
    [path],
  );
  return <PathContext value={value}>{children}</PathContext>;
};

export const usePath = () => {
  const context = useContext(PathContext);

  if (context === undefined) {
    throw new Error('context is undefined');
  }

  return { path: context.path, changePath: context.changePath };
};
