import React, { useEffect, useRef } from "react";

const DomRef = () => {
  //* 1) "null!" it is "non-null" assertion.
  const inputRef = useRef<HTMLInputElement>(null!);
  //* 2) "null".
  //   const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    //* 1)
    inputRef.current.focus();
    //* 2)
    // inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" className="form-control" />
    </div>
  );
};

export default DomRef;
