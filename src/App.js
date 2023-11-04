import React, { useState, useEffect }  from 'react';
import './App.css';
import Slidebar from './components/Slidebar';
import Navbar from './components/Navbar';
import Phimle from './components/Phimle';
import Footer from './components/Footer';
import img1 from './image/img1.jpg';
import img2 from './image/img2.jpg';
import img3 from './image/img3.jpg';

const image = [img1, img2, img3];//tạo mảng
//tạo function slide
const Imageslide = ({image}) =>
{
  const [currentImage, setCurrentImage] = useState(0);
  const time = 10000;
  //tạo hiệu ứng chuyển động
  useEffect(()=>
  {
    const intervalId = setInterval(()=>
    {
      setCurrentImage(() => Math.floor(Math.random() * image.length));
    }, time);

    return()=>{
      clearInterval(intervalId);
    };
  }, [image.length]);
  return <Slidebar image={image[currentImage]} />;
}

const Imagefooter = ({image}) =>
          {
            return <Footer image={image} />
          }

          const url = 'https://movies-api14.p.rapidapi.com/movies';
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '7f5f3470a8mshfb5fe5d36ed6a85p1fda29jsnce35e90f5b98',
              'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
          };


function App() {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => 
  {
    setMenuVisible(!menuVisible);
  }

  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () =>
  {
    setSearchVisible(!searchVisible);
  }

  return (
    <div className="App">
          <Navbar toggleMenu={toggleMenu} menuVisible={menuVisible} toggleSearch={toggleSearch} searchVisible={searchVisible}/>
          <Imageslide image={image} />
        <div className='main-content'>
        <Phimle />

        </div>
        <div className='Footer'>
          <Imagefooter image={image[0]} />
        </div>
    </div>
  );
}

export default App;
