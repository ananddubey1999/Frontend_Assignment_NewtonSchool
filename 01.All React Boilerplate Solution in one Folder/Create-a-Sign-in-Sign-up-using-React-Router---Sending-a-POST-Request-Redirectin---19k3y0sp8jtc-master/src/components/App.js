import React,{useState} from 'react'
import '../styles/App.css';
import { BrowserRouter as Router ,Route,Switch ,Redirect,NavLink,Link} from 'react-router-dom' ;
import Login from './Login.js'
import Register from './Register.js'
import Dashboard from './Dashboard';


const App = () => {

//code for  Route path="/" , Route path="/dashboard" 

  const [loggedIn,setLoggedIn]=useState(false)
 const [navigate,setNavigate]=useState(false)
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  return (

<div id='App'>
  <Router>
    
    <Switch>
      <Route path="/" exact>
     {loggedIn ? <Redirect to="/dashboard"/>: <Login email={email} password={password} setLoggedIn={setLoggedIn} setNavigate={setNavigate}/>}
      </Route>
      
      <Route path="/Register" exact>
        {navigate? <Redirect to="/" /> : <Register  emailChange={setEmail}  passwordChange={setPassword} setNavigate={setNavigate} />}
      </Route>

      <Route path="/dashboard" exact>
       <Dashboard setLoggedIn={setLoggedIn}/> 
      </Route>
    </Switch>
  </Router>
</div>
  )
}

export default App;
