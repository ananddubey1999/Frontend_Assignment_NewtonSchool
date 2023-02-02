import React, {useEffect, useState} from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { Todo } from './Todo';
import axios from 'axios';

const apiLink = "https://jsonplaceholder.typicode.com/todos";

const App = () => {

  // const [complete, setcomplete] = useState(true);
  const [ischecked, setischecked] = useState(true);
  const [incomplete, setincomplete] = useState(false);
  const [loading, setloading] = useState(false);
  const [post, setpost] = useState([]);
  const [get, setget] = useState([]);
  // let first;

  
  useEffect(()=>{
    
    async function getStoredData(){
        const response = await axios.get(apiLink);
        console.log(response);
        // console.log(response.data);
        
        setpost(response.data.splice(0, 20));
        // console.log(...post)
        setloading(false);
        // const timer = setTimeout(() => {<Loader />}, 1000);
        //   return () => clearTimeout(timer);
    }
    getStoredData();
  }, [])
  
  function handleChange(e){
    //  setcomplete(!complete);

    let word = e.target.value;
    
    // console.log(word)
    setincomplete(!incomplete);
    setischecked(!ischecked);
  
    // if(word === "completed"){
    //   const filtered = post.filter(item => item==="false")
    //   setpost(filtered)
    //   console.log(word);
    // }
  }

  return (
    <>
      {loading && (
        <h1>
          <Loader />
        </h1>
      )}
      { !loading && (
        <>
          {post
          .map((e)=>(
            
            <Todo
            
                key = {e.id}
                title = {e.title}
                completed = {e.completed ? "completed" : "incomplete"}
                onChange = {handleChange}
                // toggleTaskCompleted = {toggleTaskCompleted}
                // onClick = {() => filterItem ("Completed")}
                // post = {getFilteredTodo()}
                />
            ))}

            {/* {
              post.filter(item => item.completed ? (setget) : (setget))
            } */}
            <br />
            <br />
              {/* <Todo id = {response.data[0].id}/> */}
            <div id='filter-holder'>
              <span>Show completed</span>
                <input type="checkbox" 
                id="completed-checkbox" 
                checked={ischecked} 
                value = "completed" 
                onChange={handleChange} />
                <br />
                <span>Show incompleted</span>
                <input type="checkbox" 
                id="incompleted-checkbox" 
                // checked={incomplete}
                value="incompleted"
                onChange={handleChange} /> 
            </div>
        </>
      )
      }
    </>
  )
  }
export default App;
