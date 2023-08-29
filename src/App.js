import React, { useState, useEffect }  from 'react';
import './App.css';
import Slidebar from './components/Slidebar';
import Navbar from './components/Navbar';
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
function App() {
  return (
    <div className="App">
        
        <div className="nav">
          <Navbar />
        </div>
        <Imageslide image={image} />
    </div>
  );
}

export default App;
