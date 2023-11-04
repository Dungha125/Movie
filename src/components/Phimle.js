import React, { useState, useEffect } from 'react';

function Phimle() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const url = 'https://movies-api14.p.rapidapi.com/movies';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '980ef3f921msh4cc2d9681d5d376p11b517jsn715865c4383c',
		'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
	}
};

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.movies && data.movies.length > 0) {
          setMovies(data.movies);
          setLoading(false);
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
          <h2 className='caption'>Phim lẻ</h2>
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
