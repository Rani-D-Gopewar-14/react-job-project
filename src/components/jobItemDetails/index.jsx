import { useParams } from 'react-router-dom';
import './index.css';
import { useEffect,useState } from 'react';
import Cookies from 'js-cookie'; 
import Header from '../header';
import ListOfJob from '../listcontofjobdetails';
import JobInfo from '../jobinfo';




const JobItemsDetails = ()=>
{
    const [allValues,setValues] = useState({

        jobDetails : {},
        similarJobs : []

    })
    const {id} = useParams();

   
   

    useEffect(()=>{

        const getJobDetails = async()=>
        {
        const {jobDetails,similarJobs} = allValues;
            
        const api = `https://apis.ccbp.in/jobs/${id}`;

        const token = Cookies.get("myToken");

        const options = {
            method : "Get",
            headers :{
                Authorization : `Bearer ${token}`
            }
        }

        try {

            const response = await fetch(api,options);

            const data = await response.json();



            if(response.ok)
            {
                console.log(data);
                setValues({jobDetails : data.job_details, similarJobs:data.similar_jobs});
            }

        } catch(error) {
            console.log(error);
        }

        }

        getJobDetails();

    },[])


    return(


        <>
 

           <Header/>

           <br />

           <div className='list-content'>


            {
            allValues.jobDetails.title && ( <JobInfo jobData={allValues.jobDetails}/>
           )}


             {
               allValues.similarJobs.map( each => <ListOfJob key={each.id} listItemData={each}/> )
           }


            
            </div>

        </>

            
    )
}

export default JobItemsDetails;