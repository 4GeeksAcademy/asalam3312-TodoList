import React, { useState } from "react";
import styles from './TodoList.css'
//include images into your bundle

//create your first component
const Home = () => {

	const [item, setItem] = useState('');
	const [list, setList] = useState([]);

	
	const [hidden, setHidden] = useState(true);
	const [counter, setCounter]= useState(0);


	const saveAndSubmit = (e) => {
		if (e.key === 'Enter' && item.trim() !== '') {
			setList([...list, item.trim()]);
			setItem('');
			setCounter(counter + 1);
		}
	};

	const handlerInput = (e) => {
		setItem(e.target.value);
	}

	const removeItem = (index) => {
		let newList = [...list];
		newList.splice(index, 1);
		setList(newList);
		setCounter(counter - 1);
	}

	
	


	return (
		<div className="text-center" id="father">
			<h1 className="smoothed">Todos</h1>
			<div id="todoList">
				<div className="input-group" >
					<input type="text" className="form-control border-bottom rounded-0 border border-light" placeholder="Add item" aria-label="Add item" aria-describedby="button-addon2" value={item} onChange={handlerInput} onKeyPress={saveAndSubmit} />
				</div>
				<div>
					{
						list.map((element, index) => {
							return (
								//modificar estado local para que el elemento lea si muestra la x o no. onmouseEnter ¿x?
								<div key={index} onMouseEnter={() => { setHidden(false) }} onMouseLeave={() => { setHidden(true) }} className="d-flex justify-content-between border border-light bg-white">
									<p>{element}</p>
									<button className="deleteButton bg-white border-0" onClick={() => removeItem(element, index)}>{hidden ? null : "X"}</button>
								</div>
							)
						})
					}
				</div>
				<div id="counter" className="bg-white text-secondary">{counter != ''? counter + (' users added'): ''}</div>
			</div>
		</div>
	);
};

export default Home;

