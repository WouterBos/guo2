"use client";

import css from "./Footer.module.css";

const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return <footer className={ css.root } {...props}>{props.children}</footer>;
};

export default Footer;