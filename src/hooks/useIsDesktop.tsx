import { useState, useEffect } from "react";

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= breakpoint);

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", checkIfDesktop);

    checkIfDesktop();

    return () => {
      window.removeEventListener("resize", checkIfDesktop);
    };
  }, [breakpoint]);

  return isDesktop;
}

export default useIsDesktop;
