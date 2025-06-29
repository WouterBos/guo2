"use client";

import css from "./Footer.module.css";

const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return <div className={ css.root } {...props}>{props.children}</div>;
};

export default Footer;