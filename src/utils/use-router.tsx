export default function useRouter() {
  // 뒤로가기 메서드
  const back = () => {
    history.back();
  };

  // 특정 페이지 이동 메서드
  const push = (url: string | URL | null | undefined) => {
    window.history.pushState({}, "", url);
    window.location.href = window.location.pathname;
  };

  return { back, push };
}
