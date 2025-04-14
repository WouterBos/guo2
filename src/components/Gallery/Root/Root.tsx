"use client";

import css from "./Root.module.css";

export const Root: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={css.root}>{children}</div>;
};

export default Root;