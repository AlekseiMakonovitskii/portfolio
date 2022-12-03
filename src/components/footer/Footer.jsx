import React from 'react'
import './Footer.css'

const Footer = (props) => {
	const textContent = {
		'RUS': {
			p: 'Copyright © 2022 «Алексей Маконовицкий»',
		},

		'ENG': {
			p: 'Copyright © 2022 «Aleksei Makonovitskii»',
		},
	}

	return (
		<div className='footer'>
			<p>{textContent[props.language].p}</p>
		</div>
	)
}

export default Footer