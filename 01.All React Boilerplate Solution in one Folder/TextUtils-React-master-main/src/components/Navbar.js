import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
// yaha pe  hum each  props ko type de rahe hai jaise title : String hai to usee likhe hai about bhi string hai to usse bhi likhe hai
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
// yaha pe hum props  ko hi defaul likh sakte hai ki hume yaha props ka kyaa name hona chahiye
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };

//   yaha pe agr hum props likhna bhul gaye to ye hume default batayega ki bhai props ka name karan kr de mtlb likh de.....lol


// basically props kya hai ki hum app.js se ek value bhej rahe hai aur yaha par hum uss value ko use kr rahe hai({props.title} aise use kr rahe hai)
// jiska mtlb hum chahe to app.js me kuch bhi value denge(string,link,no.)etc wo yaha pe show hoga
// app.js me hum( title="TextUtils") aise value dete hai.