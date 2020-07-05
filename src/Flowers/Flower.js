import React from 'react';
import serverURL from '../serverURL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Flower = ({
  flower: { _id, fileName, name, price, location },
  getItems,
}) => {
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${serverURL}/api/items/delete/${_id}`);
      getItems();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='flower'>
      <div
        className='flower__image'
        style={{
          backgroundImage: `url(
            ${location}
          )`,
        }}
      ></div>
      <div className='flower__main-info'>
        <div className='flower__name'>{name}</div>
        <div className='flower__price'>{price} грн</div>
      </div>
      <FontAwesomeIcon
        icon={faTimes}
        className='deleteIcon'
        onClick={handleDelete}
      />
    </div>
  );
};

export default Flower;
