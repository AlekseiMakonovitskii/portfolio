import React from 'react';
import './Project.css';
import Category from './Category';

const Project = props => {
  return (
    <div className="project">
      <div className="project-image">
        <a href={props.project.url} target="_blank" rel="noreferrer">
					<Category category={props.project.category}/>
          <img src={props.project.img} alt="" />
        </a>
      </div>
      <div className="project-info">
        <h2>{props.project.title}</h2>
      </div>
    </div>
  );
};

export default Project;
