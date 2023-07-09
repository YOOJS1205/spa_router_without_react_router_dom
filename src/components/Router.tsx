import React, { ReactNode, useEffect, useState, createContext } from "react";

interface RouterProps {
  children: ReactNode;
}

interface RouterContextValue {
  currentPath: string;
  changePath: (to: string) => void;
}

// path 관리 context
export const RouterContext = createContext<RouterContextValue | null>(null);

export default function Router({ children }: RouterProps) {
  // path 상태
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleChangeCurrentPath = (event: PopStateEvent) => {
      setCurrentPath(event.state?.path ?? "/");
    };

    window.addEventListener("popstate", handleChangeCurrentPath);

    return () => {
      window.removeEventListener("popstate", handleChangeCurrentPath);
    };
  }, []);

  // path 변경
  const changePath = (to: string) => {
    window.history.pushState({ path: to }, "", to);
    setCurrentPath(to);
  };

  const routerContextValue: RouterContextValue = {
    currentPath,
    changePath,
  };

  return (
    <RouterContext.Provider value={routerContextValue}>
      {children}
    </RouterContext.Provider>
  );
}
