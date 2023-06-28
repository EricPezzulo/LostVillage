import { useEffect } from "react";

interface DisableScrollProps {
  showMenu: boolean;
}

const useDisableScroll = ({ showMenu }: DisableScrollProps) => {
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
    // Clean up the effect
    return () => {
      document.body.style.overflow = ""; // Restore default scrolling behavior
    };
  }, [showMenu]);
};

export default useDisableScroll;
