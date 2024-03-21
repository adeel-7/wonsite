import './About.css';
import {Link } from 'react-scroll';
import Video from '../Video/Video';

const About = () => {
  return (
    <div className="aboutWrapper">
        <div className="about">
            <span className="aboutHeading">
                About Clinic
            </span>

            <p className="aboutText"> At West Orange Nephrology Clinic, we prioritize your kidney health. Our team of experienced 
                nephrologist is here to provide personalized care and support at every step of your 
                journey to wellness.
            </p>

            <hr className="aboutHR" />
            <br />
            <Link className="aboutLink" >Make an appointment</Link>
        </div>


        {/* <img src={Rectangle14} alt="aboutImg" /> */}
        <Video className="aboutVideo" />
    </div>
  )
}

export default About