import React from "react";
import "./Types.scss";
import serverURL from "../serverURL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

export const Types = ({ types, getTypes }) => {
  const handleDelete = async id => {
    try {
      const res = await axios.delete(`${serverURL}/api/types/delete/${id}`);
    } catch (e) {
      console.error(e);
    }
    getTypes();
  };

  return (
    <div className="types">
      <p>Types:</p>
      {types.map((type, index) => (
        <div className="type" key={index}>
          <div>{type.name}</div>
          <FontAwesomeIcon
            icon={faTimes}
            className="deleteIcon"
            onClick={() => handleDelete(type._id)}
          />
        </div>
      ))}
    </div>
  );
};
