/*
reducer is defined here and is exproted.
This reducer should handle all the actions.
Example of how to use reducer is as follows:

const reducer = (state = [],action = {}) => {

  switch(action.type){

    case 'actionType1': 
      return changedState1;
    
    case 'actionType2':
      return changedState2;

    default: 
      return state;
    }
  
export default reducer;
*/
/*
reducer is defined here and is exproted.
This reducer should handle all the actions.
Example of how to use reducer is as follows:
const reducer = (state = [],action = {}) => {
  switch(action.type){
    case 'actionType1': 
      return changedState1;
    
    case 'actionType2':
      return changedState2;
    default: 
      return state;
    }
  
export default reducer;
*/
import { v4 as uuidv4 } from "uuid";
import { combineReducers } from "redux";

const initalState = {
  items: [],
  item: { owner: "", model: "", description: "", resolved: false },
  editMode: false,
};

function listReducer(state = initalState, action) {
  switch (action.type) {
    case "repairAdded":
      action.payload.id = uuidv4();
      action.payload.resolved = false;
      return {
        ...state,
        items: state.items.concat([action.payload]),
        item: { owner: "", model: "", description: "" },
        editMode: false,
      };

    case "repairRemoved":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        item: { owner: "", model: "", description: "" },
        editMode: false,
      };
    case "repairResolved":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id == action.payload.id) {
            item.resolved = !item.resolved;
          }
          return item;
        }),
        item: { owner: "", model: "", description: "" },
      };
    case "editTask":
      return {
        ...state,
        item: action.payload,
        editMode: true,
      };
    case "repairUpdate":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id == action.payload.id) {
            item.owner = action.payload.owner;
            item.model = action.payload.model;
            item.description = action.payload.description;
          }
          return item;
        }),
        item: { owner: "", model: "", description: "" },
        editMode: false,
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  bicycle: listReducer,
});

export default reducers;
Footer