import React, { useState, useEffect } from 'react';

function Shows() {
    const [show, setShow] = useState([]);
    const [loading, setLoading] = useState(true);
    const [caption, setCaption] = useState('');
  
    useEffect(() => {
      const url = 'https://movies-api14.p.rapidapi.com/home';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '7f5f3470a8mshfb5fe5d36ed6a85p1fda29jsnce35e90f5b98',
          'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
      };
  
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          if (data[5].movies && data[5].movies.length > 0) {
            setShow(data[5].movies);
            setLoading(false);
            setCaption(data[5].title)
          } else {
            console.log('Không tìm thấy hình ảnh cho phim này.');
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log('Đã xảy ra lỗi:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className='block'>
        <div className='heading'>
          <a href='#'>
            <h2 className='caption'>{caption}</h2>
          </a>
          <a className='see-more' href='#'>
            Xem tất cả
          </a>
        </div>
        <ul className='list_phim_content'>
          {show.slice(0, 8).map((movie, index) => (
            <li className='itemsmall' key={index}>
              <a title={movie.title}>
                <i className='fa-solid fa-play'></i>
                <img
                  src={movie.backdrop_path} 
                  alt={`Phim bo ${index}`}
                />
                <p>{movie.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Shows