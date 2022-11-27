import React from 'react'
import './Header.css'

const Header = (props) => {
	const aboutClass = props.activePage ? 'activeNav' : '';
	const projectsClass = !props.activePage ? 'activeNav' : '';

	const openAboutHandler = () => {
		props.onChangePage(true);
	}

	const openProjectsHandler = () => {
		props.onChangePage(false);
	}

	return (
		<div className='header'>
			<ul>
				<li className={aboutClass} onClick={openAboutHandler}>Обо мне</li>
				<li className={projectsClass} onClick={openProjectsHandler}>Мои работы</li>
			</ul>
			
		</div>
	)
}

export default Header