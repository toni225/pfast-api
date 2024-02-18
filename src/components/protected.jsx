
import {Navigate, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {isLoggedIn} from "../services/auth.service";

export const Protected = ({children}) => {
    const [accessible,setAccessible] = useState(null)

    useEffect(()=>{
       isLoggedIn()
           .then((loginned)=>{setAccessible(loginned)})
           .catch(()=>{setAccessible(false)})
    },[])

    switch (accessible){
        case true:
            return children
        case false:
            return <Navigate to={'/login'}/>
        case null:
            return <div>Loading...</div>
    }
}
