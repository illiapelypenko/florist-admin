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
      if (!res.ok) {
        throw Error(`server error`);
      }
      getTypes();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="types">
      <p>Types:</p>
      {types.map(type => (
        <div className="type">
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
