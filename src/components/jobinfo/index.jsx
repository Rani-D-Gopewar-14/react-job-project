import './index.css';
import { FaLocationDot } from "react-icons/fa6";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { FaStar } from "react-icons/fa";




const JobInfo = (props) =>
{

    
    const { 
        title, 
        company_logo_url, 
        rating, 
        location, 
        employment_type,
        package_per_annum,
        job_description,
        company_website_url,
        skills,
        life_at_company

    } = props.jobData; 
    return(
        <>

       <div className='job-card'>

        <div className='jobby'>

          <div className='d-flex'>
              <img src={company_logo_url} alt="logo" width={"80px"} className='mr-3'/>

           <div>
             <h1>{ title}</h1>

            <b>Rating : {rating} <FaStar className='text-warning'/></b>
           </div>
          </div>


          <br />

         <div className="lpa">
             <div className='d-flex'>
                <p className='mr-3'><FaLocationDot className='mr-1'/>{location}</p>

            <p><BsSuitcaseLgFill className='mr-2'/>{employment_type }</p>
             </div>

             <b>{package_per_annum}</b>
         </div>

         <hr className='bg-danger'/>

         <div className='description'>

            <h1>Description</h1>

            <a href={company_website_url} arget="_blank"className="visit-link">
                 Visit <FiExternalLink />
            </a>

         </div>
         <br />
                     <p>{job_description}</p>

                     <br />

            <div className='skills-section'>
                           <h2>Skills</h2>
                           <br />
                           <ul className='skills-list'> 
                               {skills.map(skill => (
                                   <li key={skill.name} className='skill-item'>
                                       <img src={skill.image_url} className='skill-image'/>
                                       <p className='skill-name'>{skill.name}</p>
                                   </li>
                               ))}
                           </ul>
                       </div>

            <br />

            <h4>Life At Company</h4>

            <hr />


            <div className='d-flex'>

                <p className='mr-4'>{life_at_company.description}</p>

                <img src = {life_at_company.image_url} height={"150px"}/>
            </div> 

        </div>

        <br />

        <div className='similarJobs'>

            <h2>Similar Jobs</h2>

       

        </div>



             </div>

        </>
    )
}
export default JobInfo;