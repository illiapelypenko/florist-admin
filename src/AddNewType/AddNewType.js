import React, { useState } from "react";
import "../AddNew.scss";
import serverURL from "../serverURL";

export const AddNewType = ({ getTypes }) => {
  const [name, setName] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    if (!name) return;

    try {
      const res = await fetch(`${serverURL}/api/types/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      });
      if (!res.ok) {
        throw Error(`server error`);
      }
    } catch (e) {
      console.error(e);
    }
    setName("");
    getTypes();
  };

  return (
    <form className="addNew" onSubmit={handleSubmit}>
      <div className="addNew__form-piece">
        <label for="name">Name:</label>
        <input
          type="string"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="addNew__form-piece">
        <input id="submit" type="submit" value="Add" />
      </div>
    </form>
  );
};
