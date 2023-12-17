import React, { useEffect, useRef } from "react";

const DomRef = () => {
  //* "null!" it is "non-null" assertion.
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" className="form-control" />
    </div>
  );
};

export default DomRef;
