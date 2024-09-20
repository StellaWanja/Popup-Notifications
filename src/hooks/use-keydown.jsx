import { useEffect } from "react";

const UseKeydown = (key, callback) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === key) {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [key, callback]);
};

export default UseKeydown;
