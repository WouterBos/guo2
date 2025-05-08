"use client";

import css from "./List.module.css";

export const List: React.FC<{
  images: object;
  selected: string;
  updateSelected: (code: string) => void;
}> = ({ images, selected, updateSelected }) => {
  const handleClick = (key: string) => {
    updateSelected(key);
    window.history.pushState(null, "", `#photo${key}`);
  };

  return (
    <div className={css.root}>
      <ul className={css.list}>
        {Object.entries(images).map(([key, value]) => (
          <li key={key}>
            <div
              className={`${css.button} ${key === selected ? css.selected : ""}`}
              onClick={() => handleClick(key)}
              onKeyUp={(e) => {
                console.log("key", e.key);
                if (e.key === "Enter") {
                  handleClick(key);
                }
              }}
              style={{
                cursor: "pointer",
              }}
              role="button"
              tabIndex={0}
            >
              <img src={`/groetenuitoss/photos/${key}-thumbnail.avif`} title={value} alt={value} loading="lazy" />
              <div className={css.code}>{key}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
