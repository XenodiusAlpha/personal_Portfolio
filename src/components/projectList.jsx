import React from 'react'
// import project screenshots
import employeeTracker from '../assets/screenshots/employeeTracker.png';
import weatherDashboard from '../assets/screenshots/weatherDashboard.png';
import weddingRSVP from '../assets/screenshots/weddingRSVP.png';
import browserTextEditor from '../assets/screenshots/browserTextEditor.png';
import readmeGenerator from '../assets/screenshots/readmeGenerator.png';
import codeCrackers from '../assets/screenshots/codeCrackers.png';
import kaizenEsque from '../assets/screenshots/kaizenEsque.png';

// list of all projects and components
const projectList = [
    {
        screenshot: employeeTracker,
        screenshotImageAlt: 'Employee Tracker CLI Image',
        deployedLink: 'https://github.com/XenodiusAlpha/employee_tracker_cms',
        projectTitle: 'Employee Tracker',
        repoLink: 'https://github.com/XenodiusAlpha/employee_tracker_cms',
        id: 1
    },
    {
        screenshot: weatherDashboard,
        screenshotImageAlt: 'Weather Dashboard Forecast API Image',
        deployedLink: 'https://xenodiusalpha.github.io/weather_dashboard_forecast/',
        projectTitle: 'Weather Dashboard Forecast',
        repoLink: 'https://github.com/XenodiusAlpha/weather_dashboard_forecast',
        id: 2
    },
    {
        screenshot: weddingRSVP,
        screenshotImageAlt: 'Wedding RSVP Image',
        deployedLink: 'https://xenodiusalpha.github.io/Wedding-RSVP/',
        projectTitle: 'Wedding RSVP',
        repoLink: 'https://github.com/XenodiusAlpha/Wedding-RSVP',
        id: 3
    },
    {
        screenshot: browserTextEditor,
        screenshotImageAlt: 'Browser Text Editor Image',
        deployedLink: 'https://browser-text-editor-js-933c5f013968.herokuapp.com/',
        projectTitle: 'Browser Text Editor',
        repoLink: 'https://github.com/XenodiusAlpha/browser_text_editor_pwa',
        id: 4
    },
    {
        screenshot: readmeGenerator,
        screenshotImageAlt: 'Professional README Generator CLI Image',
        deployedLink: 'https://github.com/XenodiusAlpha/nodeJS_professional_readme_generator',
        projectTitle: 'Professional README Generator',
        repoLink: 'https://github.com/XenodiusAlpha/nodeJS_professional_readme_generator',
        id: 5
    },
    {
        screenshot: codeCrackers,
        screenshotImageAlt: 'Code Crackers API Image',
        deployedLink: 'https://github.com/XenodiusAlpha/code_crackers',
        projectTitle: 'Code Crackers',
        repoLink: 'https://github.com/XenodiusAlpha/code_crackers',
        id: 6
    },
    {
        screenshot: kaizenEsque,
        screenshotImageAlt: 'Kaizen-esque LMS Image',
        deployedLink: 'https://kaizen-esque.onrender.com/',
        projectTitle: 'Kaizen-esque',
        repoLink: 'https://github.com/XenodiusAlpha/kaizen_esque',
        id: 7
    }
];

export default projectList;