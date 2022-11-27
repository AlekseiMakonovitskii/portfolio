import React from 'react';
import './Technologies.css';

const Tech = (props) => {
	const color = 'tech-body ' + props.color; 

  return (
    <div className="tech">
      <div className="tech-head">
        <h3>{props.name}</h3>
      </div>
      <div className={color}></div>
    </div>
  );
};

export default Tech;
