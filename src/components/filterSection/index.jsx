import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./index.css";


const empArray = [
    {
        id : "INTERNSHIP",
        label : "Internship"
    },
    {
        id : "PARTTIME",
        label : "Part Time"
    },
    {
        id : "FULLTIME",
        label : "Full Time"
    },
    {
        id : "FREELANCE",
        label : "Freelance"
    },
]


const sallryArr = [
    {
        id : 1000000,
        label : "10 LPA and Above"
    },
    {
        id : 2000000,
        label : "20 LPA and Above"
    },
    {
        id : 3000000,
        label : "30 LPA and Above"
    },
    {
        id : 4000000,
        label : "40 LPA and Above"
    },
]


const FilterSection = (prop) => {

  const {setMyValues,myValues} = prop;

  const [allValues, setValues] = useState({
    userProfile: {},
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = Cookies.get("myToken");
      const api = "https://apis.ccbp.in/profile";

      const options = {
        method: "Get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(api, options);
        const data = await response.json();

        if (response.ok) {
          setValues({ ...allValues, userProfile: data.profile_details });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const displayProfile = () => (
    <div className="w-100 shadow p-3">
      <img src={allValues.userProfile.profile_image_url} width="100px" />
      <div>
        <h4>{allValues.userProfile.name}</h4>
        <p>{allValues.userProfile.short_bio}</p>
      </div>
    </div>
  );


  const displayEmpType = ()=>{

    const onSetEmpType = (e)=>
    {
      if(e.target.checked)
      {

         setMyValues({...myValues,emptype : [...myValues.emptype,e.target.value]})

      }
      else
      {

        setMyValues({...myValues,emptype:myValues.emptype.filter(each =>each !== e.target.value)});

      }
    }

        return (
            <div className="p-3 shadow">  
            <h4>Employment Type : </h4>
            <ul style={{listStyle:"none"}}>
                {
                    empArray.map( each => (
                        <li key={each.id}>
                            <input onChange={onSetEmpType} value={each.id} id = {each.id} type="checkbox" />
                            <label className="ml-3" htmlFor={each.id}>{each.label}</label>
                        </li>
                    ))
                }
            </ul>
            </div>
        )

  }


  const displaySallry = ()=>{

    const onSetSallery = (e)=>
    {
      setMyValues({...myValues,sallary : e.target.value});
    }

    return (
            <div className="p-3 shadow">  
            <h4>Sallry Range : </h4>
            <ul style={{listStyle:"none"}}>
                {
                    sallryArr.map( each => (
                        <li key={each.id}>
                            <input onChange={onSetSallery} name="sallry" id = {each.id} type="radio" value={each.id}/>
                            <label className="ml-3" htmlFor={each.id}>{each.label}</label>
                        </li>
                    ))
                }
            </ul>
            </div>
        )
  }

  return(
    
    <div className="w-100">
        {displayProfile()}
        <br />
        {displayEmpType()}
        <br /> 
        {displaySallry()}
    </div>
  )


};

export default FilterSection;
