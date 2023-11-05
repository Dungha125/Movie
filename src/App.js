import React, { useState, useEffect }  from 'react';
import './App.css';
import Slidebar from './components/Slidebar';
import Navbar from './components/Navbar';
import Phimle from './components/Phimle';
import Phimbo from './components/Phimbo';
import Footer from './components/Footer';
import BestAnimation from './components/BestAnimation';
import Shows from './components/Shows';
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
        <Phimbo />
        <BestAnimation />
        <Shows />
        </div>
        <div className='Footer'>
          <Imagefooter image={image[0]} />
        </div>
    </div>
  );
}

export default App;
