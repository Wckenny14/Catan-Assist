import './about.css'
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className="About">
            {/* <hr /> */}
            <h3 className='contact'>Contact</h3>
            <div className='personal-data-links'>
                <NavLink to="https://github.com/Wckenny14/Catan-board-generator-and-score-board" className="external-links">GitHub</NavLink> | <NavLink to="/" className="external-links">Project Portfolio</NavLink> | <NavLink to="https://www.linkedin.com/wayne-c-kenny" className="external-links">LinkedIn</NavLink>
            </div>
            <div className='personal-statement'>
                <p> App created by Wayne Kenny, built as a project in my career change journey</p>
            </div>
        </div>
    );
}

export default About;
