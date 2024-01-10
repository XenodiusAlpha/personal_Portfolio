import React from 'react';
// importing project component and project list 
import Project from '../components/Project';
import projectList from '../components/projectList';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolioSection'>
      <div>
        <h1>Projects</h1>
        <div className='portfolioCards'>
          {/* mapping throught the projectList to create a list */}
          {projectList.map((list) => (
            // providing a key for the list
            <div key={list.id}>
              {/* using the props from project, send the list items to populate the cards */}
              <Project
                screenshot={list.screenshot}
                screenshotImageAlt={list.screenshotImageAlt}
                deployedLink={list.deployedLink}
                projectTitle={list.projectTitle}
                repoLink={list.repoLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio;