"use client";

import "./Title.css";

export const TitleStyled: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="titleStyled">{children}</div>;
};

export const TextBlock: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="textBlock">{children}</div>;
};