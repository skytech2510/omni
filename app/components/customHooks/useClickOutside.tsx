import { useRef, useEffect } from "react";
const useOutsideClick = (callback: any) => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !(ref.current as unknown as HTMLElement).contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);
  return ref;
};
export default useOutsideClick;
