import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) callback();
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
