import React from 'react'
import Image from '../assets/images/profile_pic.jpg'

const AboutMe = () => {
  return (
    <section>
      <div>
        <h1>About Me</h1>
        <p>
          Hi! My name is <strong>Justin</strong>, and I'm a budding full-stack web developper. I've been in the automotive industry
          for the past 5 years, where I've worked hard to get my red-seal certification. Now I've got my sights set on a new venture
          in life, one that throught twist and turns of life had been pushed aside, that's right: <em>web developpment</em>!
        </p>
      </div>
      <div>
        <img src={Image} alt="" />
      </div>
    </section>
    
  )
};

export default AboutMe