import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Header from '../header';
import FilterSection from '../filterSection';
import DisplayAllJobs from '../displayAllJobs';
import './index.css'; 


const Jobs = ()=> {

    const [allValues,setValues] = useState({

        jobsArr : [],
        emptype : [],
        sallary : "",
        userin : "",

    });

    useEffect(()=>{

        const getJobs = async ()=>{

            const {emptype,sallary,userin} = allValues;

            console.log( emptype );

            const api = `https://apis.ccbp.in/jobs?employment_type=${emptype}&minimum_package=${sallary}&search=${userin}`;

            const token = Cookies.get("myToken");

            const options = {
                method:"Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            try {

                const response = await fetch(api,options);
                const data = await response.json();

                if( response.ok ){
                    console.log( data );
                    setValues({...allValues,jobsArr : data.jobs});
                }
                
            } catch (error) {
                console.log(error);
            }

        }

        getJobs();

    },[allValues.userin,allValues.emptype,allValues.sallary]);

    const onTitleUpdate = (e)=>
    {

        if(e.key === "Enter")
        {
            setValues({...allValues,userin:e.target.value});
        }
        // console.log(e.target.value);
        // console.log(e.key);
       

    }

    return (

        <>
            <Header/>
           <br /> 
            
           <div className='w-100 d-flex justify-content-center'>
            <input onKeyUp={onTitleUpdate} type="text" className='form-control border-danger w-75' placeholder='Search Jobs Here'/>
           </div>
           <br />
           <div className='jobs-cont container'>

                    <div className='row'>

                                <div className='col-12 col-md-3'>
                                    <FilterSection setMyValues = {setValues} myValues = {allValues}/>
                                </div>
                                <div className='col-12 col-md-9'>
                                    

                                  {allValues.jobsArr.length > 0 ?(

                                 
                                   <ul className='w-100'>
                                         {
                                        allValues.jobsArr.map( each => <DisplayAllJobs jobsDetails = {each} key={each.id}/>)
                                    }
                                   </ul>
                                  ) : (
                                    <div className='text-center p-4'>
                                      
                                        <br />

                                        <img src="https://img.freepik.com/premium-vector/flat-illustration-character-seeking-job-laptop_67813-29260.jpg" style={{width : "400px"}} />

                                            <br />
                                      
                                        <p className='text-danger'>Try adjusting your search term, Employment type, or salary range filters</p>
                                    </div>
                                  )};
                                </div>
                    </div>

           </div>

     
        </>

    )
}



export default Jobs;