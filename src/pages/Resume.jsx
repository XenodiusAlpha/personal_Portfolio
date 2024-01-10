import React from 'react'
import './Resume.css';

const Resume = () => {
  return (
    <section className='resumeSection'>
      
      <div>
        <h1>Resume</h1>
        
        <div className='resumeDownload'>
        <p>
          Download my {" "}
          <a target="_blank" href="https://docs.google.com/document/d/1MLWmI0ja4jHlZEUqFA5ilzggrEszdgBz/edit?usp=sharing&ouid=106709814056177001845&rtpof=true&sd=true">resume</a>
        </p>
        </div>
        <div className='proficiencies'>
          <div>
            <h2>Front-end proficiencies</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Responsive Designs</li>
              <li>Bootstrap</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <h2>Back-end proficiencies</h2>
            <ul>
              <li>API's</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume