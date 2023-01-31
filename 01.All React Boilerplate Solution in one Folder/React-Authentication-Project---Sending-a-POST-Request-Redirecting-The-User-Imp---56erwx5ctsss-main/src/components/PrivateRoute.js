import React from "react";
import Login from "./Login"; 
import { useHistory } from "react-router-dom";
const PrivateRoute = (props)=>{
    let history = useHistory();
   
     if(window.localStorage.getItem("username") && window.localStorage.getItem("password")){
        return(
            <>
              {props.children}
            </>
        )
     }else{
        history.push("/login");
        return(
            <Login />
        )
     }
   
}
export default PrivateRoute;
