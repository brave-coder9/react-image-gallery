import React from 'react';

import './index.css';

const Preview = ({
  imageUrl,
  width = 400,
  height = 300,
}) => {
  return (
    <div className="preview" style={{
      backgroundImage: `url("${imageUrl}")`,
      backgroundSize: `${width}px ${height}px`,
      width,
      height,
    }}>
      {!imageUrl && <p>Select an image</p>}
    </div>
  )
}

export default Preview
