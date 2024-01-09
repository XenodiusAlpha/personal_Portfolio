import React from 'react';
import Project from '../components/Project';



const Portfolio = () => {
  return (
    <section>
      <div>
        <h1>Projects</h1>
          <Project
            screenshot="path/to/screenshot1.jpg"
            screenshotImageAlt="Project 1 Screenshot"
            deployedLink="https://example.com/project1"
            projectTitle="Project 1 Title"
            repoLink="https://github.com/yourusername/project1"
          />
      </div>
    </section>
  )
}

export default Portfolio;