import './Directors.css';
import ProfileImg from '../../../src/assets/D1.jpg';
import ProfileImg1 from '../../../src/assets/D2.jpg';

const Directors = () => {

      
  return (
        <div className='directorsWrapper' id="directors">
        <div className="text-center">   
            Our Coaches <br/>
            <span className="mainHeading"> Nephrology's Compassionate Expertise.</span>
        </div>
        <br/><br/>

        <div className="coaches-section">
          <div className="coach">
            <img className="profile-image" src={ProfileImg} alt="Profile 1" />
            <span className="name">Claire Brown</span>
            <span className="desig">Health & Wellness Coach</span>
          </div>

          <div className="coach">
            <img className="profile-image" src={ProfileImg1} alt="Profile 2" />
            <span className="name">Alicia Ayers</span>
            <span className="desig">Phlebotomy Clinic Supervisor</span>
          </div>

          {/* <div className="coach">
            <img className="profile-image" src={dummy1} alt="Profile 2" />
            <span className="name">Mastaneh Sharafi</span>
            <span className="desig">Nutritional Sciences</span>
          </div> */}

    </div>

    </div>
  )
}

export default Directors