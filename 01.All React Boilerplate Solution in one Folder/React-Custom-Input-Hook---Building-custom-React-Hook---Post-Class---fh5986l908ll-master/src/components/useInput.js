import { useState } from "react";

//complete the input hook
const useInput = (initialValue) => {

    const [value,setvalue1]=useState(initialValue);

    const onChange1=(e)=>{
           setvalue1(e.target.value)
        }


    return {value,onChange : onChange1,};
};


export default useInput;