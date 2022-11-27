import React from 'react'
import './Technologies.css';
import Tech from './Tech';

const Technologies = () => {
	return (
		<div className='technologies'>
			<div className="technologies-title">
				<h1>Технологии, которые я использую</h1>
			</div>

			<div className="technologies-body">
				<Tech name={'HTML'} color={'red'}/>
				<Tech name={'CSS'} color={'blue'}/>
				<Tech name={'JavaScript'} color={'yellow'}/>
				<Tech name={'Webpack'} color={'darkblue'}/>
				<Tech name={'React'} color={'lightblue'}/>
			</div>
		</div>
	)
}

export default Technologies