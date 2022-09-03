import React, { useRef, useEffect } from "react";

const useOutsideAlerter = (ref, action, value) => {
    
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        action(value);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

const OutsideAlerter = ({ children, action, value }) => {
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, action, value);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
