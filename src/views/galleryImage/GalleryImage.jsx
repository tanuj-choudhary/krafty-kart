// Third party imports
import React from 'react';

 function GalleryImage({ image }) {
  return (
    <div className="gallery-img">
      <img src={image} alt="watch" />
    </div>
  );
}

export default GalleryImage;