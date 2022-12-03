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
	

	const textContent = {
		'RUS': {
			li1: 'Обо мне',
			li2: 'Мои работы',
		},

		'ENG': {
			li1: 'About me',
			li2: 'My projects',
		},
	}

	return (
		<div className='header'>
			<ul>
				<li className={aboutClass} onClick={openAboutHandler}>{textContent[props.language].li1}</li>
				<li className={projectsClass} onClick={openProjectsHandler}>{textContent[props.language].li2}</li>
				<li onClick={props.onChangeLang}>{props.language === 'ENG' ? 'RUS' : 'ENG'}</li>
			</ul>
			
		</div>
	)
}

export default Header