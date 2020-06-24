import React, { useState, useEffect } from "react";
import serverURL from "../serverURL";
import "../AddNew.scss";
import axios from 'axios';

export const Contacts = ({ contacts, getContacts }) => {
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setPhone1(contacts.phone1);
    setPhone2(contacts.phone2);
    setEmail(contacts.email);
  }, [contacts]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!phone1 || !phone2 || !email) return;

    try {
      const res = await axios.put(`${serverURL}/api/contacts/edit`, {
        phone1,
        phone2,
        email,
      });
    } catch (e) {
      console.error(e);
    }
    setPhone1("");
    setPhone2("");
    setEmail("");
    getContacts();
  };

  return (
    <form className='addNew' onSubmit={handleSubmit}>
      <div className='addNew__form-piece'>
        <label htmlFor='phone1'>Phone1: </label>
        <input
          type='phone'
          name='phone1'
          id='phone1'
          value={phone1}
          onChange={(e) => setPhone1(e.target.value)}
        />
      </div>
      <div className='addNew__form-piece'>
        <label htmlFor='phone2'>Phone2: </label>
        <input
          type='phone'
          name='phone2'
          id='phone2'
          value={phone2}
          onChange={(e) => setPhone2(e.target.value)}
        />
      </div>
      <div className='addNew__form-piece'>
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='addNew__form-piece'>
        <input id='submit' type='submit' value='Edit' />
      </div>
    </form>
  );
};
