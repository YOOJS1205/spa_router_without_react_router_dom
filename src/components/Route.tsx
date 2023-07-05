import React from "react";

interface RouteProps {
  path: string;
  component: React.ReactNode;
}

const Route: React.FC<RouteProps> = ({
  path,
  component: Component,
}: RouteProps) => {
  return <Component />;
};

export default Route;
