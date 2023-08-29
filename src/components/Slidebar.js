import React from 'react';

function slidebar({image}) {
  return (
    <div className='slide'>
      <img 
        className='slide_image'
        src={image}
        alt='Slider' // eslint-disable-next-line
      />
    </div>
  )
}

export default slidebar