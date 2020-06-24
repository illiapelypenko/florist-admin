import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import '../AddNew.scss';
import serverURL from '../serverURL';
import axios from 'axios';

export const AddNewItem = ({ getItems, types }) => {
	const [file, setFile] = useState();
	const [key, setKey] = useState(0);
	const [name, setName] = useState('qwe');
	const [price, setPrice] = useState('123');
	const [type, setType] = useState('');

	const setDefaultSelectValue = () => {
		if (types.length > 0) {
			setType(types[0].name);
		}
	};

	useEffect(setDefaultSelectValue, [types]);

	const handleSubmit = async e => {
		e.preventDefault();
		console.log(type);
		if (!name || !price || !type || !file) return;

		const data = new FormData();

		data.append('file', file);
		data.append('name', name);
		data.append('price', price);
		data.append('type', type);

		try {
			const res = await axios.post(`${serverURL}/api/items/upload`, {
        data
      });
			if (!res.ok) {
				throw Error(`server error`);
			}
		} catch (e) {
			console.error(e);
		}
		setFile(null);
		setKey(key + 1);
		setName('');
		setPrice('');
		getItems();
	};

	return (
		<form className='addNew' onSubmit={handleSubmit}>
			{/* <FontAwesomeIcon icon={faPlus} /> */}
			<div className='addNew__form-piece'>
				<label for='name'>Name:</label>
				<input
					type='string'
					name='name'
					id='name'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</div>
			<div className='addNew__form-piece'>
				<label for='price'>Price:</label>
				<input
					type='number'
					name='price'
					id='price'
					value={price}
					onChange={e => setPrice(e.target.value)}
				/>
			</div>
			<div className='addNew__form-piece'>
				<label for='type'>Type:</label>
				<select
					name='type'
					id='type'
					value={type}
					onChange={e => setType(e.target.value)}>
					{types.map(type => (
						<option value={type.name}>{type.name}</option>
					))}
				</select>
			</div>
			<div className='addNew__form-piece'>
				<label for='file'>Picture:</label>
				<input
					className='uploader'
					type='file'
					name='file'
					id='file'
					accept='.png,.jpg,.svg,.jpeg'
					onChange={e => setFile(e.target.files[0])}
					key={key} // to reset file
				/>
			</div>
			<div className='addNew__form-piece'>
				<input id='submit' type='submit' value='Add' />
			</div>
		</form>
	);
};
