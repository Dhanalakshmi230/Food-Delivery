import React from 'react';
import { useParams } from 'react-router-dom';
import { menu_list } from '../../assets/assets'; // Adjust the import based on your file structure
import './ImageDetail.css'; // Add styles as needed

const ImageDetail = () => {
  const { id } = useParams();
  const item = menu_list.find(item => item.id === id);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className='image-detail'>
      <img src={item.menu_image} alt={item.menu_name} />
      <h2>{item.menu_name}</h2>
      {/* Add more details if necessary */}
    </div>
  );
};

export default ImageDetail;
