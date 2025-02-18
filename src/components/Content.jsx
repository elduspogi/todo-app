import React, { useEffect, useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
import { FaTrashAlt } from 'react-icons/fa';
import { HiOutlinePlus } from 'react-icons/hi2'

const Content = () => {
	const [ input, setInput ] = useState([]);
	const submitData = () => {
		const inputTag = document.querySelector('#inputText');
		if(inputTag.value !== "") setInput([...input, inputTag.value ]);
		inputTag.value = "";

	}

	useEffect(() => {
		if(input.length > 0) {
			localStorage.setItem("open", true);
		} else {
			localStorage.setItem("open", false);
		}
	}, [input.length])

	const deleteData = (index) => {
		// const newArr = input.splice(index, 1);
		// setInput(newArr);
	}

	return (
		<div className='content'>
			<div className='input flex flex-row w-full py-10 px-5 my-2'>
				<div className='w-1/10 flex content-center'>
					<CiImageOn className='text-2xl' />
				</div>

				<div className='input-text w-8/10'>
					<input type="text" id='inputText' className='w-full focus:outline-none' />
				</div>

				<div className='add-button w-1/10 px-10'>
					<HiOutlinePlus className='text-2xl' onClick={submitData} />
				</div>
			</div>

			{input.map((item, key) => (
			<div className='input flex flex-row w-full py-10 px-5 my-2' key={key}>
				<div className='w-1/10 flex content-center'>
					<CiImageOn className='text-2xl' />
				</div>

				<div className='input-text w-8/10'>
					<h1>{item}</h1>
				</div>

				<div className='add-button w-1/10 px-10'>
					<FaTrashAlt className='text-2xl' onClick={deleteData(key)} />
				</div>
			</div>
			))}
		</div>
	)
}

export default Content