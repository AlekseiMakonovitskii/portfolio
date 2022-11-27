import React from 'react'
import './Projects.css'
import Project from './Project'

const Projects = (props) => {
	return (
		<div className='projects'>
			{props.projects.map(project => {
				return <Project project={project} key={project.title}/>
			})}


		</div>
	)
}

export default Projects