"use client";

import "./Gallery.css";

export const GalleryRoot: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="galleryRoot">{children}</div>;
};

export const ImageList: React.FC<{
  images: object;
  selected: string;
  updateSelected: (code: string) => void;
}> = ({ images, selected, updateSelected }) => {
  const handleClick = (key: string) => {
    updateSelected(key);
    window.history.pushState(null, "", `#photo${key}`);
  };

  return (
    <div className="imageList">
      <ul className="imageList_list">
        {Object.entries(images).map(([key, value]) => (
          <li key={key}>
            <div
              className={`imageList_button ${
                key === selected ? "selected" : ""
              }`}
              onClick={() => handleClick(key)}
              style={{
                cursor: "pointer",
              }}
            >
              <img
                src={`/groetenuitoss/photos/${key}-thumbnail.avif`}
                title={value}
                alt={value}
                loading="lazy"
              />
              <div className="imageList__code">{key}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const SelectedImage: React.FC<{ code: string; description: string }> = ({
  code,
  description,
}) => {
  return (
    <div className="selectedImage">
      <img src={`/groetenuitoss/photos/${code}.avif`} alt={description} />
      <div>
        <span>{description}</span>
        <div className="selectedImage__code">{code}</div>
      </div>
    </div>
  );
};
