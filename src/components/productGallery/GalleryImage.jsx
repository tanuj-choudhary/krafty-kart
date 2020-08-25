import React from 'react';

export default function GalleryImage({ image }) {
  return (
    <div className="gallery-img">
      <img src={image} alt="watch" />
    </div>
  );
}
