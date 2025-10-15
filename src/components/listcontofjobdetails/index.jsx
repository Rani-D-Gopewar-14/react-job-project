
import './index.css'
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsSuitcaseLgFill } from "react-icons/bs";

const ListOfJob = (props) =>
{

    const {title,company_logo_url, location,employment_type,rating,job_description} = props.listItemData; 

    return(

             <div className='job-card2'>


             <li className='jobby2'>

                 <div className='d-flex'>
                              <img src={company_logo_url} alt="logo" width={"60px"} className='mr-3'/>
                
                           <div>
                             <h3>{ title}</h3>
                
                            <b>Rating : {rating} <FaStar className='text-warning'/></b>
                 </div>
                 </div>

                 <br />

                 <h3>Description</h3>

                 <br />


                 <p>{job_description}</p>
                 <br />

                  <div className='d-flex'>
                                 <p className='mr-3'><FaLocationDot className='mr-1'/>{location}</p>
                 
                             <p><BsSuitcaseLgFill className='mr-2'/>{employment_type }</p>
                    </div>

             


               
             </li>



        </div>

             
        
    )

}
export default ListOfJob;


