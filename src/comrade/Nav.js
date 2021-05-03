import {Link} from 'react-router-dom'

function Nav() {
    return(
        <nav>
            <ul>
            <h3 class = "navheader">NAVIGATION</h3>
			<div><Link class = "navbutton" to="/">Home</Link></div> 
			<div><Link class = "navbutton" to="/today">Today</Link></div>
			<div><Link class = "navbutton" to="/Calendar">Calendar</Link></div>
			<div><Link class = "navbutton" to="/class-schedule">Class<br></br>Schedule</Link></div> 
			<div><Link class = "navbutton" to="/lists">Lists</Link></div>
            </ul>
        </nav>
    );
}

export default Nav;
