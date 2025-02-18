import React, { useEffect, useState } from 'react'
import Content from '../components/Content';
import Empty from '../components/Empty';

const Home = () => {
	const [ open, setOpen ] = useState(true);


	const content = open ? <Content /> : <Empty />;

	// useEffect(() => {
	// 	const buttons = open ? (
	// 		<div className='flex flex-row gap-1'>
	// 			<button className='cancel'>Cancel</button>
	// 			<button className='save'>Save</button>
	// 		</div>
	// 	) :
	// 	<button className='save'>Edit</button>;
	// }, [open]);

	return (
		<>
			<div className="container">
				<header>
					<h1>Mock Title</h1>
				</header>

				{content}

				<footer>
					<div className='flex justify-end'>
					</div>
				</footer>
			</div>
		</>
	)
}

export default Home