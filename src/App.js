import React, { useState, useEffect } from 'react';
import './App.scss';
import { AddNewItem } from './AddNewItem/AddNewItem';
import { AddNewType } from './AddNewType/AddNewType';
import Flowers from './Flowers/Flowers';
import serverURL from './serverURL';
import { Types } from './Types/Types';
import { Contacts } from './Contacts/Contacts';

const App = () => {
	const [items, setItems] = useState([]);
	const [types, setTypes] = useState([]);
	const [contacts, setContacts] = useState([]);

	const getItems = async () => {
		const res = await fetch(`${serverURL}/api/items/all`);
		const items = await res.json();
		setItems(items);
	};

	const getTypes = async () => {
		const res = await fetch(`${serverURL}/api/types/all`);
		const types = await res.json();
		setTypes(types);
	};

	const getContacts = async () => {
		const res = await fetch(`${serverURL}/api/contacts/`);
		const contacts = await res.json();
		setContacts(contacts);
	};

	useEffect(getItems, []);
	useEffect(getTypes, []);
	useEffect(getContacts, []);

	return (
		<div className='app'>
			<div>
				<AddNewItem getItems={getItems} types={types} />
				<AddNewType getTypes={getTypes} />
				{types ? <Types types={types} getTypes={getTypes} /> : null}
				<Contacts contacts={contacts} getContacts={getContacts} />
			</div>
			{items ? <Flowers flowers={items} getItems={getItems} /> : null}
		</div>
	);
};

export default App;
