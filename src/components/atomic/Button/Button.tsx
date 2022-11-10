import classNames from "classnames";
import React from "react";

import styles from "./button.module.css";

type buttonProps = {
  className?: string;
  children: React.ReactNode;
  type?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  className,
  children,
  type = "graident",
  disabled,
  onClick,
}: buttonProps) => {
  return (
    <button
      className={classNames(
        className,
        type === "gradient" && styles.button,
        "px-4 py-2 block text-foreground-900"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
