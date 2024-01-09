import React from 'react';
import gitHubLogo from '../assets/icons/github-mark.png';
import linkedInLogo from '../assets/icons/LI-In-Bug.png';
import instagramLogo from '../assets/icons/Instagram_Glyph_Gradient.png';

const Footer = () => {
  return (
    <footer>
        <a target="_blank" href='https://github.com/XenodiusAlpha'>
            <img src={gitHubLogo} alt="GitHub link to portfolio" />
        </a>
        <a target='_blank' href="https://www.linkedin.com/in/justin-surette">
            <img src={linkedInLogo} alt="LinkedIn link to profile" />
        </a>
        <a target='_blank' href="https://www.instagram.com/xenodiusalpha/">
            <img src={instagramLogo} alt="Instagram link to profile" />
        </a>
    </footer>
  )
}

export default Footer;