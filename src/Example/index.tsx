import React from "react";
import styles from "./index.module.css";
export interface IExampleProps {
  /**
   * Text to show in component. This description shows also in storybook
   */
  text: string;
}
export const Example = ({ text }: IExampleProps) => {
  return <div className={styles.root}>{text}</div>;
};
