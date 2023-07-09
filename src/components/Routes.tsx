import React, { ReactNode, isValidElement } from "react";
import useRouter from "../utils/use-router";

interface RoutesProps {
  children: ReactNode[];
}

export default function Routes({ children }: RoutesProps) {
  const { pathname } = useRouter();
  const isRenderComponent = (child: ReactNode): boolean => {
    // React 컴포넌트가 아니라면 false return
    if (!isValidElement(child)) {
      return false;
    }

    return child.props.path === pathname;
  };
  return <>{children.find(isRenderComponent)}</>;
}
