"use client";

import css from "./Title.module.css";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={ css.root }>{children}</div>;
};

export default Title;
