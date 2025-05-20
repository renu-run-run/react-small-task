// src/components/Gallery.jsx
import React from 'react';
import Masonry from 'react-masonry-css';
import images from '../data/images';
import './Gallary.css';

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    600: 1
  };

  return (
    <div className="gallery-container">
      <h2>COLLECTIONS</h2>
      <h4>Why to be Normal <br/>When we could be insanely interesting instead.</h4>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map(({ id, title, url }) => (
          <div className="card" key={id}>
            <img src={url} alt={title} />
            <p>{title}</p>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
