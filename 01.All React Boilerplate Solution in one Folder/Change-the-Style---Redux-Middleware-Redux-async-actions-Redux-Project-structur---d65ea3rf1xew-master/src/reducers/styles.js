const initialState = "Arial";

const styleReducer=(state=initialState,action)=>{

    switch(action.type){
  
        
        case "ARIAL": return "Arial";
        case "GEORGIA": return "Georgia";
  
        
        default : return state;
        

    }
}

export default styleReducer;