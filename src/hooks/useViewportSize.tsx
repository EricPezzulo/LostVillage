import { useEffect, useState } from "react";

interface ViewportSize {
  width: number;
  height: number;
}

const useViewportSize = (): ViewportSize => {
  const [viewportSize, setViewportSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewportSize;
};

export default useViewportSize;
