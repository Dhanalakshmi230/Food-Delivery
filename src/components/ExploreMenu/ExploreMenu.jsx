import React, { useState } from 'react';
import "./ExploreMenu.css";
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  const [scrollToAll, setScrollToAll] = useState(false);

  const handleCategoryClick = (clickedCategory) => {
    setCategory(clickedCategory);
    if (clickedCategory !== "All") {
      setScrollToAll(true);
      setTimeout(() => {
        setScrollToAll(false);
      }, 0); // Scrolls after the next render cycle
    }
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delightful array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => handleCategoryClick(item.menu_name)}
            key={index}
            className='explore-menu-list-item'
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="all-images-container" style={{ display: scrollToAll ? 'block' : 'none' }}>
        {menu_list.map((item, index) => (
          <div key={index} className={`all-image ${category === "All" ? "active" : ""}`}>
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMenu;
