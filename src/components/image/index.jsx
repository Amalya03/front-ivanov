import React from "react";

const Image = ({ src, alt, srcset, imgStyle, containerStyle, onClick }) => {
  return (
    <div className={containerStyle} onClick={onClick}>
      <img src={src} srcset={srcset} alt={alt} className={imgStyle} />
    </div>
  );
};

export default Image;
