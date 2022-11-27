import React from 'react'
import './Category.css'

const Category = (props) => {
	let categoryClass = '';
	console.log(props.category)

	if (props.category === 'HTML/CSS') {
		categoryClass = 'category css-html';
	}

	return (
		<div className={categoryClass}>{props.category}</div>
	)
}

export default Category