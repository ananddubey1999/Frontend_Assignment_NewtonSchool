

export const changeColor=(a)=>{
   if(a=="red") {return{
        type:"RED"
    }}else{
        return{
            type:"GREEN"
        }
    }
}
export const changeStyle=(a)=>{
    if(a=="Arial") {return{
         type:"GEORGIA"
     }}else{
         return{
             type:"ARIAL"
         }
     }
 }