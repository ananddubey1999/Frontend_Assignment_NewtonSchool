const initialState = "red";

const colorReducer=(state=initialState,action)=>{

    switch(action.type){
  
        
        case "RED": return "green";
        case "GREEN": return "red";
  
        
        default : return state;
        

    }
}

export default colorReducer;