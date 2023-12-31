import React, { useState, useEffect } from 'react';

function Phimle() {
  const [movies, setMovies] = useState([]);
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
        if (data[0].movies && data[0].movies.length > 0) {
          setMovies(data[0].movies);
          setLoading(false);
          setCaption(data[0].title);
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
        {movies.slice(0, 8).map((movie, index) => (
          <li className='itemsmall' key={index}>
            <a title={movie.title}>
              <i className='fa-solid fa-play'></i>
              <img
                src={movie.backdrop_path} // Set the 'poster_path' as the src attribute
                alt={`Phim le ${index}`}
              />
              <p>{movie.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Phimle;
