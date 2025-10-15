import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'



const ProtectedRoute = (prop)=>{

    const {Component} = prop;

    const navigate = useNavigate();

    useEffect(()=>{

        const token = Cookies.get("myToken");

        if( token === undefined ){

            navigate("/login")
        }

    },[]);

    return (
        <Component/>
    )

}


export default ProtectedRoute;