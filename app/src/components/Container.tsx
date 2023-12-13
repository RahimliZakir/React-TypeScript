import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};

const Container: React.FC<ContainerProps> = ({ styles }) => {
  return (
    <div>
      <p style={styles}>This is my text.</p>
    </div>
  );
};

export default Container;
