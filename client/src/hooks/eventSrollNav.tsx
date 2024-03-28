import { useState, useEffect } from "react";

function useScroll(): boolean {
  const [scrollingUp, setScrollingUp] = useState<boolean>(true);

  useEffect(() => {
    let lastScrollTop: number = document.documentElement.scrollTop;

    const handleScroll = () => {
      const scrollTop: number = document.documentElement.scrollTop;
      setScrollingUp(scrollTop < lastScrollTop);
      lastScrollTop = scrollTop <= 100 ? 100 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    // Khi component unmount, loại bỏ event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // useEffect chỉ chạy một lần sau khi component mount

  return scrollingUp;
}

export default useScroll;
