import React from "react";
import { Link } from 'react-router-dom';

function Dashboard({ setLoggedIn }) {

    return (
        <div id="dashboardPage">
            <h1 id="dashboard-tag"> Welcome to Dashboard</h1>
            <Link to="/"><button id="dashboard-logout" onClick={() => setLoggedIn(false)}>Log out </button></Link>
        </div>
    )

}
export default Dashboard;
