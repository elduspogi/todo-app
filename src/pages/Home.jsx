import React, { useEffect, useState } from 'react'
import Content from '../components/Content';
import Empty from '../components/Empty';

const Home = () => {
	const [ open, setOpen ] = useState(localStorage.getItem("open"));

	useEffect(() => {
		setOpen(open);
	}, [open]);
	const content = open ? <Content /> : <Empty />;

	return (
		<>
			<div className="container">
				<header>
					<h1>To Do List</h1>
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