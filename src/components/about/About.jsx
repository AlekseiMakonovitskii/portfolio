import React from 'react'
import './About.css'
import Info from '../info/Info'
import Technologies from '../technologies/Technologies'

const About = (props) => {
	return (
		<div className='about'>
				<Info language={props.language}/>
				<Technologies language={props.language}/>
		</div>
	
	)
}

export default About