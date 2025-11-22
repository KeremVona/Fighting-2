import { useEffect } from "react";

interface UseKN {
  onPrev: () => void;
  onNext: () => void;
}

type NavigationHandler = () => void;

const useKeyboardNavigation = (
  onPrev: NavigationHandler,
  onNext: NavigationHandler
): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }
      if (event.key === "ArrowLeft") {
        onPrev();
      } else if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onPrev, onNext]);
};

export default useKeyboardNavigation;
