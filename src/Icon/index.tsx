import React from "react";
import { IconSize } from "./constants";
import styles from "./styles.module.css";
import { joinClasses } from "./utils";

export interface IIconProps {
  source: string;
  /**
   * Size to determine width and height
   */
  size?: IconSize | number;
  isDisabled?: boolean;
  className?: string;
  alt?: string;
}

export const Icon = ({
  source,
  size = IconSize.MEDIUM,
  isDisabled = false,
  className = "",
  alt = "Icono",
}: IIconProps) => {
  return (
    <img
      src={source}
      alt={alt}
      className={joinClasses(styles.root, className, isDisabled ? styles.disabled : undefined)}
      data-size={size}
    />
  );
};
