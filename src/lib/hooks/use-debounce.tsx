import { useEffect, useState } from "react";

function useDebounce<T>(val: T, delay = 600) {
  const [debouncedVal, setDebouncedVal] = useState<T>(val);

  useEffect(() => {
    const timeoutIdx = setTimeout(() => {
      setDebouncedVal(val);
    }, delay);

    return () => {
      clearTimeout(timeoutIdx);
    };
  }, [val, delay]);

  return debouncedVal;
}

export default useDebounce;
