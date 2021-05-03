/* eslint-disable jsx-a11y/anchor-is-valid */

function ComradeFront() {
    return(
        <div>
			<h3 className = "welcomeTo">Welcome To</h3>
			<h1 className = "comrade">COMRADE</h1>

			{/* <div className = "themes">
				<div className = "dropdown">
					<button className = "dropbtn">Themes</button>
					<div className = "dropdown-content">
						<a href = "#" style = {{letterSpacing: '3px', color: 'white'}}>Theme 1</a>
						<a href = "#" style = {{letterSpacing: '3px', color: 'white'}}>Theme 2</a>
						<a href = "#" style = {{letterSpacing: '3px', color: 'white'}}>Theme 3</a>
					</div>
				</div>
			</div> */}

			<div className = "container">
				
				<div className = "greenbox">
					<div><a href = "/today" className = "button">Today</a></div>
				</div>

				<div className = "bluebox">
					<div><a href = "/calendar" className = "button">Calendar</a></div>
				</div>	

				<div className = "bluebox">
					<div><a href = "/class-schedule" className = "button">Class<br></br>Schedule</a></div>
				</div>

				<div className = "greenbox">
					<div><a href = "/lists" className = "button">Lists</a></div>
				</div>
				
			</div>

			<br></br><br></br><br></br><br></br>
		
			<div><a href = "/about" className = "about">About</a></div>
			<br></br><br></br>
		</div>

    );
}

export default ComradeFront;