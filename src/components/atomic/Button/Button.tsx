import classNames from "classnames";
import React from "react";

import styles from "./button.module.css";

type buttonProps = {
  className?: string;
  children: React.ReactNode;
  type?: string;
};

const Button = ({ className, children, type = "graident" }: buttonProps) => {
  return (
    <button
      className={classNames(
        className,
        type === "gradient" && styles.button,
        "px-4 py-2 block text-foreground-900"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
