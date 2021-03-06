import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Emerald Green</h1>
      <img className="cover-img" src={coverImage} alt="leaf pattern wallpaper"></img>
      {props.children}
    </header>
  );
}

export default Header;
