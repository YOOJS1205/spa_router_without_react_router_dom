export function useRouter() {
  // 뒤로가기 메서드
  const back = () => {
    history.back();
  };

  // 특정 페이지 이동 메서드
  const push = ({ data, title, url }: PushArgType) => {
    history.pushState(data, title, url);
  };

  return { back, push };
}

interface PushArgType {
  data: object;
  title: string;
  url: string | URL | null | undefined;
}
