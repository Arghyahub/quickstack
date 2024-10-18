import React, { memo } from "react";

type Props = {
  ref: React.MutableRefObject<any>;
  callback: () => void;
};

const useClickOutside = (
  ref: React.MutableRefObject<any>,
  callback: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default useClickOutside;
