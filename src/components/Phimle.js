import React from 'react'

function Phimle({image, caption}) {
  return (
    <div className='block'>
            <div className='heading'>
              <a href='#'>
                <h2 className='caption'>{caption}</h2>
              </a>
              <a className='see-more' href='#'>Xem tất cả</a>
            </div>
              <ul className='list_phim_content'>
                <li className='itemsmall'>
                  <a title='phimdungha' href='#'>
                    <img src={image}>
                    </img>
                    <p>Phim le</p>
                  </a>
                </li>
                <li className='itemsmall'>
                  <a title='phimdungha' href='#'>
                    <img src={image}></img>
                      <p>Phim le</p>
                  </a>
                </li>
                <li className='itemsmall'>
                  <a title='phimdungha' href='#'>
                    <img src={image}></img>
                      <p>Phim le</p>
                    
                  </a>
                </li>
                <li className='itemsmall'>
                  <a title='phimdungha' href='#'>
                    <img src={image}></img>
                      <p>Phim le</p>
                    
                  </a>
                </li>
                <li className='itemsmall'>
                  <a title='phimdungha' href='#'>
                    <img src={image}></img>
                      <p>Phim le</p>
                    
                  </a>
                </li>
                <li className='itemsmall'>
                  <a title='phimdungha' href='#'>
                    <img src={image}></img>
                      <p>Phim le</p>
                    
                  </a>
                </li>
                <li className='itemsmall'>
                  <a title='phimdungha' href='#'>
                    <img src={image}></img>
                      <p>Phim le</p>
                    
                  </a>
                </li>
                <li className='itemsmall'>
                  <a title='phimdungha' href='#'>
                    <img src={image}></img>
                      <p>Phim le</p>
                    
                  </a>
                </li>
                <li className='itemsmall'>
                  <a title='phimdungha' href='#'>
                    <img src={image}></img>
                      <p>Phim le</p>
                    
                  </a>
                </li>
                <li className='itemsmall'>
                  <a title='phimdungha' href='#'>
                    <img src={image}></img>
                      <p>Phim le</p>
                    
                  </a>
                </li>
              </ul>
            </div>
  )
}

export default Phimle