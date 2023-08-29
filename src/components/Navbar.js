import React from 'react'

function Navbar() {
  return (
    <div className="nav">
    <span className="NAME">DUNGHAPHIM</span>
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
      <div className='search'>
      <input className='input_search' placeholder='Tìm phim tại đây'></input>
      <button className='btn_search'><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    </ul>
    </div>
  )
}

export default Navbar