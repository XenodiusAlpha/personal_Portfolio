import React from 'react';
import gitHubLogo from '../assets/icons/github-mark-white.png';
import './Project.css';

const Project = ({ screenshot, screenshotImageAlt, deployedLink, projectTitle, repoLink }) => {

    return (
    <section>
        {/* create card of project to be used in portfolio */}
        <div className='projectCard'>
            <img src={screenshot} alt={screenshotImageAlt} />
            <div className='projectLinks'>
                <a target='_blank' href={deployedLink}><h2>{projectTitle}</h2></a>
                <a target='_blank' href={repoLink}><img src={gitHubLogo} alt='GitHub Repository Icon' /></a>
            </div>
        </div>
    </section>
  )
}

export default Project;