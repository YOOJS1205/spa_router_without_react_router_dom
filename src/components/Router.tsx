import React, { ReactNode, Children, ReactElement } from "react";
import Route from "./Route";

interface RouterProps {
  children: ReactNode;
}

export default function Router({ children }: RouterProps) {
  const isReactElement = (child: ReactNode): child is ReactElement => {
    return !!(
      child &&
      typeof child === "object" &&
      "type" in child &&
      "props" in child
    );
  };

  const renderedElements: ReactElement[] = [];

  Children.forEach(children, (child) => {
    if (isReactElement(child) && child.type === Route) {
      renderedElements.push(child);
    }
  });

  console.log(renderedElements);

  return renderedElements;
}
