import { ReactNode } from "react";

interface RouteProps {
  path: string;
  component: ReactNode;
}

export default function Route({ path, component }: RouteProps) {
  return <>{component}</>;
}
