const initialState = "";

const tellZodiac=(state=initialState,action)=>{

    switch(action.type){
  
        
        case "ZODIAC": if(action.payload=="January") {return "Aquarius"}
        if(action.payload=="February") {return "Pisces"}
        if(action.payload=="March") {return "Aries"}
        if(action.payload=="April") {return "Taurus"}
        if(action.payload=="May") {return "Gemini"}
        if(action.payload=="June") {return "Cancer"}
        if(action.payload=="July") {return "Leo"}
        if(action.payload=="August") {return "Virgo"}
        if(action.payload=="September") {return "Libra"}
        if(action.payload=="October") {return "Scorpio"}
        if(action.payload=="November") {return "Sagittarius"}
        if(action.payload=="December") {return "Capricon"}
         else{return ""};
        default : return state;
        

    }
}
export default tellZodiac;