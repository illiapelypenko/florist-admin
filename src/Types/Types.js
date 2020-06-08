import React from "react";
import "./Types.scss";
import serverURL from "../serverURL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const Types = ({ types, getTypes }) => {
  const handleDelete = async id => {
    try {
      const res = await fetch(`${serverURL}/api/types/delete/${id}`, {
        method: "DELETE"
      });
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
