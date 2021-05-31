import React from 'react'

import '../style/Movies.css';

export const Movies = ({ title, image }) => {
  return (
    <div className="movies">
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  )
}