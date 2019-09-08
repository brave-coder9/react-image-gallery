import React, { useEffect, useState } from 'react';
import ReactHoverObserver from 'react-hover-observer';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

import './index.css';

const ThumbnailCard = ({
  thumbnailUrl = "",
  width = 150,
  height = 140,
  title,
  isSelected = false,
  onClick = (() => {}),
  isFavourite = false,
  onFavourite = ((isFavourite) => {})
}) => {

  const [isHover, setIsHover] = useState(false);

  const hoverChanged = ({ isHovering }) => {
    setIsHover(isHovering);
  };

  const handleClickFavourite = event => {
    onFavourite(event.target.checked);
  }

  return (
    <ReactHoverObserver {...{
      onHoverChanged: hoverChanged,
    }}>
      <div className="thumbnail-card" data-tip>
        <div className="thumbnail-image" style={{
          backgroundImage: `url("${thumbnailUrl}")`,
          backgroundSize: `${width}px ${height}px`,
          overflow: 'hidden',
          transition: 'background-size 0.5s ease-out',
          width,
          height,
          cursor: 'pointer',
          borderWidth: isSelected ? 4 : 0,
          borderColor: '#fe7e43',
          borderStyle: 'solid',
          boxShadow: isSelected ? '0 0 10px #fe7e43' : '0 0 10px #bbb',
        }} onClick={onClick}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%',
          }}>
            <span style={{
              transition: 'all 0.5s ease',
              zIndex: 1000,
              opacity: isHover ? 1 : 0,
              color: 'white',
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 1.71,
              letterSpacing: 4,
              wordBreak: 'break-word',
              margin: 10,
            }}>
            </span>
          </div>
          <div style={{
            transition: 'all 0.5s ease',
            height: '100%',
            width: '100%',
            backgroundColor: 'black',
            zIndex: 999,
            opacity: isHover ? 0.5 : 0,
            position: 'relative',
            left: 0,
            top: '-100%',
            pointerEvents: 'none',
          }} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', margin: '8px', cursor: 'pointer'}}>
          <span style={{ maxWidth: 150 }}>
            <label style={{ fontSize: 12, display: 'flex', textAlign: 'left', cursor: 'pointer' }}>
              <Checkbox
                checked={isFavourite}
                onChange={handleClickFavourite}
              />
              &nbsp;&nbsp;{title}
            </label>
          </span>
        </div>
      </div>
    </ReactHoverObserver>
  )
};

export default ThumbnailCard;
