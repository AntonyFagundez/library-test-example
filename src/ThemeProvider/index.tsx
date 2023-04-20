import React, { type PropsWithChildren } from "react";
import styles from "./styles.module.css";

export interface IThemeProviderProps extends PropsWithChildren {
  /**
   * Css className containing css vars to override.
   */
  cssVarsOverrides?: string;
}

export const ThemeProvider = ({ children, cssVarsOverrides = "" }: IThemeProviderProps) => {
  return (
    <div
      className={`${styles.themeVars} ${cssVarsOverrides}`}
      data-ds-modo
      data-testid="theme-provider"
    >
      {children}
    </div>
  );
};
