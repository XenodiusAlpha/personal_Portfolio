import React from 'react';
import gitHubLogo from '../assets/icons/github-mark.png';

const Project = () => {

    const { screenshot, screenshotImageAlt, deployedLink, projectTitle, repoLink } = props;


    return (
    <section>
        {/* create card of project to be used in portfolio */}
        <div>
            <img src={screenshot} alt={screenshotImageAlt} />
            <a target='_blank' href={deployedLink}><h2>{projectTitle}</h2></a>
            <a target='_blank' href={repoLink}><img src={gitHubLogo} alt='GitHub Repository Icon' /></a>
        </div>
    </section>
  )
}

export default Project;