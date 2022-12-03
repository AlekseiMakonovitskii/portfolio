import React from 'react'
import './Info.css'
import avatar from '../../images/71717332.png'

const Info = (props) => {
	const textContent = {
		'RUS': {
			p1: 'Привет, меня зовут Алексей, я начинающий Frontend разработчик.',
			p2: 'В данный момент у меня нет опыта работы в разработке, но я активно изучаю данное направление уже почти год.',
			p3: 'Буду рад работать с вами в одной команде.'
		},

		'ENG': {
			p1: `Hello, my name is Aleksei, I'm a beginner Frontend developer.`,
			p2: `At the moment I have no work experience in development, but I have been actively studying this area for almost a year.`,
			p3: 'I will be glad to work with you in the same team.',
		},
	}



	return (
		<div className='info'>
			<div className="im-section">
				<h1>Frontend Developer</h1>
			</div>
			<div className="avatart-section">
				<div className="avatar-background">
					<img src={avatar} alt="avatar" />
				</div>
			</div>
			<div className="info-text-section">
				<p>{textContent[props.language].p1}</p>
				<p>{textContent[props.language].p2}</p>
				<p>{textContent[props.language].p3}</p>
			</div>
		</div>
	)
}

export default Info