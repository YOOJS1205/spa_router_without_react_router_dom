import { ReactNode, JSX, useEffect, useState } from "react";

interface RouteProps {
  path: string;
  component: JSX.Element;
}

export default function Route({ path, component }: RouteProps) {
  const [pathName, setPathName] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathName(window.location.pathname);

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  return pathName === path ? component : null;
}
