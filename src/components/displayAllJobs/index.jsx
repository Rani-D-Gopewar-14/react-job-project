import { FaBriefcase } from "react-icons/fa6";
import './index.css';
import { Link } from "react-router-dom";
import JobItemsDetails from "../jobItemDetails";

/*
company_logo_url: "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png"
employment_type: "Internship"
id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751"
job_description: "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support."
location: "Delhi"
package_per_annum: "10 LPA"
rating: 4
title: "Devops Engineer"

*/

const DisplayAllJObs = (props)=>{

    const {jobsDetails} = props;

    return (

        <Link className="link-cont" to={`/jobs/${jobsDetails.id}`}>
        <li style={{listStyle:"none"}} className="w-100 p-3 rounded shadow mb-3">

                <div style={{display:"flex",alignItems:"center"}}>

                            <img src= {jobsDetails.company_logo_url} width="70px" />

                <div className="ml-3">
                        <h4>{jobsDetails.title}</h4>
                       <div className="d-flex">
                         <div>
                        <span>Employment : </span>
                        <span className="text-danger">{jobsDetails.employment_type}</span>
                        </div>

                        <div className="ml-5">
                                <span>Package : </span>
                                <span className="text-danger">{jobsDetails.package_per_annum}</span>
                        </div>
                       </div>
                </div>


                </div>

                <hr className="bg-danger"/>

                <h4>Description</h4>

                <p style={{textAlign:"justify"}}>{jobsDetails.job_description}</p>

        </li>

        </Link>
    )
}



export default DisplayAllJObs;