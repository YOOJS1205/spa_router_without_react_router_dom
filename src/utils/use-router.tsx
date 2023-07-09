import { useContext } from "react";
import { RouterContext } from "../components/Router";

interface UseRouterType {
  push: (path: string) => void;
  pathname: string;
}

export default function useRouter(): UseRouterType {
  // context
  const RouterContextValue = useContext(RouterContext);

  if (RouterContextValue === null) {
    throw new Error("context 값이 null입니다.");
  }

  const { currentPath, changePath } = RouterContextValue;
  const pathname = currentPath;

  // 특정 페이지 이동 메서드
  const push = (path: string) => {
    changePath(path);
  };

  return { push, pathname };
}
