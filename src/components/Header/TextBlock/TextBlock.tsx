"use client";

import css from "./TextBlock.module.css";

const TextBlock: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={ css.root }>{children}</div>;
};

export default TextBlock;