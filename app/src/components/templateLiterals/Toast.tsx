import React from "react";

/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

type HorizontalPosition = "left" | "center" | "right";

type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  //* center-center'in yazilmasinin qarshisini aliriq
  position: Exclude<
    `${HorizontalPosition}-${VerticalPosition}`,
    "center-center"
  >;
};

const Toast: React.FC<ToastProps> = ({ position }) => {
  return (
    <div>
      Toast Notification Position - <strong>{position}</strong>
    </div>
  );
};

export default Toast;
