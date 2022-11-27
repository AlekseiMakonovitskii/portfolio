import React from 'react'
import './Info.css'
import avatar from '../../images/71717332.png'

const Info = () => {
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
				<p>Меня зовут Алексей, я начинающий Frontend разработчик</p>
				<p>В данный момент у меня нет опыта работы в разработке, но активно изучаю данное направление уже почти год</p>
				<p>Буду рад работать с вами в одной команде</p>
			</div>
		</div>
	)
}

export default Info