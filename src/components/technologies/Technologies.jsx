import React from 'react'
import './Technologies.css';
import Tech from './Tech';

const Technologies = (props) => {

	const textContent = {
		'RUS': {
			h1: 'Технологии, которые я использую',
		},

		'ENG': {
			h1: 'Technologies I use',
		},
	}

	return (
		<div className='technologies'>
			<div className="technologies-title">
				<h1>{textContent[props.language].h1}</h1>
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