import { useEffect } from "react";

const ScrollHeader = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let didScroll = false;
      let lastScrollTop = 0;
      const delta = 5;
      const header = document.getElementById("myHeader");
      const navbarHeight = header.offsetHeight;
      const menuCheckbox = document.getElementById("menu");

      const onScroll = () => {
        didScroll = true;
      };

      window.addEventListener("scroll", onScroll);

      const scrollInterval = setInterval(() => {
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
      }, 250);

      const hasScrolled = () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > lastScrollTop && st > navbarHeight) {
          header.classList.remove("nav-down");
          header.classList.add("nav-up");
          // 스크롤 시 checkbox 체크 해제
          menuCheckbox.checked = false;
        } else {
          if (st + window.innerHeight < document.documentElement.scrollHeight) {
            header.classList.remove("nav-up");
            header.classList.add("nav-down");
          }
        }

        lastScrollTop = st;
      };

      const cleanup = () => {
        window.removeEventListener("scroll", onScroll);
        clearInterval(scrollInterval);
      };

      return cleanup;
    }
  }, []); // 빈 배열을 전달하여 useEffect를 마운트와 언마운트 시에만 실행되도록 함

  return null; // 컴포넌트 자체는 렌더링되지 않으므로 null을 반환
};

export default ScrollHeader;
