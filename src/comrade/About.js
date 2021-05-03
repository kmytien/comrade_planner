/* eslint-disable jsx-a11y/img-redundant-alt */
// import { Link } from 'react-router-dom'

import mytpic from '../pictures/mytien.jpeg'
import haypic from '../pictures/haylee.jpeg'
import sanpic from '../pictures/sanjana.jpeg'
import linpic from '../pictures/lincoln.jpeg'

function About() {
    const navStyle = {
        float: 'left',
        width: '15%',
        height: '100%',
        background: '#545F66',
        padding: '5px',
        marginTop: '-50px',
        position: 'fixed',
    }

    const navUlStyle = {
        listStyleType: 'none',
        padding: '0',
        fontFamily: 'dream orphans',
        color: 'white',
        textAlign: 'center',
        fontSize: '20px',
        letterSpacing: '3px',
    }			

return(
    <div>
        <nav style={navStyle}>
            <ul style={navUlStyle}>
                <h3 className = "navheader">NAVIGATION</h3>
                <div><a href = "/" className = "navbutton">Home</a></div>
					<div><a href = "/today" className = "navbutton">Today</a></div>
					<div><a href = "/calendar" className = "navbutton">Calendar</a></div>
					<div><a href = "/class-schedule" className = "navbutton">Class<br></br>Schedule</a></div>
					<div><a href = "/lists" className = "navbutton">Lists</a></div>
            </ul>
        </nav>
        
        <div style = {{marginLeft: '18%'}}>
                
                <h3 className = "pageheader" style = {{textAlign: 'center'}}>ABOUT</h3>
                <h2 style = {{textAlign: 'center'}}><i>The Comrade Planner</i></h2><br></br>

                <p className = "aboutpara"><b>
                    This website was made for our SE 319 Class: Construction of User Interfaces, at Iowa State University.<br></br><br></br>
                    As a group, we all decided that it would be a great idea to create <br></br>
                    an interactive yet useful planner for users, specifically for students in<br></br> 
                    high school or college. This was in result of other average online <br></br>
                    planners lacking the necessary customization to suit all users. As <br></br>
                    students, we want to be able to customize our planners to suit all <br></br>
                    our needs in school and life in general. With that, the idea of Comrade came alive.<br></br>
                    <br></br>
                    <br></br>
                </b></p>
                <p className = "aboutpara" style = {{textAlign: 'left', marginLeft: '20%'}}>
                Our goals for this planner were to:<br></br><br></br>
                - Create a website that allows users to make their own online customized planner<br></br>
                - Provide that customization necessary to fit all facets of our user's lives<br></br>
                - Import other calenders/applications such as Google Calender, Spotify, Slack etc<br></br>
                - Create a reminder/to-do list system for the user<br></br>
                - Provide a calming yet diverse optional themes for the student planner<br></br>
                </p>
                <br></br>

                <h2 style = {{fontSize: '30px', letterSpacing: '5px'}}>Project Team 13 Members</h2>
                <p className = "aboutpara">Second Year ISU Students (2020 - 2021)</p><br></br>
            
                <div className="colcontainer">
                    <div style={{marginleft: '100%'}} className="card">
                        <br></br>
                            <img src={mytpic} alt="Picture of MyTien" style = {{height: '384px', width: '367px'}}/>
                            <h2>MyTien Kien</h2>
                            <p className = "aboutpara">Front-end Developer</p>
                            <p className = "aboutpara">Loves Designing</p>
                            <p className = "aboutpara">kmytien@gmail.com</p>
                            <br></br>
                    </div>

                    <div className="card">
                        <br></br>
                            <img src={haypic} alt="Picture of Haylee" style = {{height: '384px', width: '375px'}}/>
                            <h2>Haylee Lawrence</h2>
                            <p className = "aboutpara">React.js Guru</p>
                            <p className = "aboutpara">Dog Lover</p>
                            <br></br>
                    </div>

                    <div className="card">
                        <br></br>
                            <img src={sanpic} alt="Picture of Sanjana" style = {{height: '384px', width: '331px'}}/>
                            <h2>Sanjana Amatya</h2>
                            <p className = "aboutpara">Front-end Developer</p>
                            <p className = "aboutpara">Weather Gorl</p>
                            <p className = "aboutpara">sanjana@amatya.net</p>
                            <br></br>
                    </div>

                    <div className="card">
                        <br></br>
                            <img src={linpic} alt="Picture of Lincoln" style = {{height: '384px', width: '307px'}}/>
                            <h2>Lincoln Khongmaly</h2>
                            <p className = "aboutpara">Calendar Populator</p>
                            <p className = "aboutpara">Networking King</p>
                            <br></br>
                    </div>
                </div> <br></br>
            </div>
        </div>
    );
}

export default About;