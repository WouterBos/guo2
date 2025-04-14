"use client";

import css from "./Selected.module.css";

export const Selected: React.FC<{ code: string; description: string }> = ({
  code,
  description,
}) => {
  return (
    <div className={css.selected}>
      <img src={`/groetenuitoss/photos/${code}.avif`} alt={description} />
      <div>
        <span>{description}</span>
        <div className={css.selected}>{code}</div>
      </div>
    </div>
  );
};


export default Selected;