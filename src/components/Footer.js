import React from 'react'

function Footer({image}) {
  return (
    <div>
    <span className='namefooter'>DUNGHAPHIM</span>
    <img 
        className='slide_image_footer'
        src={image}
    ></img>
    </div>
  )
}

export default Footer