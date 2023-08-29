import React from 'react'

function Navbar() {
  return (
    <><span className="NAME">PHIMMOI</span>
    <ul className="menu">
      <li id='menu'>TRANG CHỦ</li>
      <li id='menu' className='types'>
        <span>THỂ LOẠI</span>
        <ul className='list_film'>
          <li id='listfilm'>Hành động</li>
          <li id='listfilm'>Tình cảm</li>
          <li id='listfilm'>Hoạt hình</li>
          <li id='listfilm'>Hài hước</li>
          <li id='listfilm'>Chiến tranh</li>
          <li id='listfilm'>Kinh dị</li>
          <li id='listfilm'>Gia đình</li>
        </ul>
      </li>
      <li id='menu'>PHIM LẺ</li>
      <li id='menu'>PHIM BỘ</li>
      <li id='menu'>TOP PHIM</li>
    </ul></>
  )
}

export default Navbar