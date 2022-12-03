import React from 'react'
import './Category.css'

const Category = (props) => {
	let categoryClass = '';

	if (props.category === 'HTML/CSS') {
		categoryClass = 'category css-html';
	}

	if (props.category === 'JavaScript') {
		categoryClass = 'category JavaScript';
	}

	return (
		<div className={categoryClass}>{props.category}</div>
	)
}

export default Category