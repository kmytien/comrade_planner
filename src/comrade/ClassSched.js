import React, { Component } from 'react'
import { DayPilot, DayPilotCalendar } from "daypilot-pro-react";

class ClassSched extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewType: "Week",
			dayBeginsHour: 7,
			dayEndsHour: 21,
			height: 750,
			heightSpec: "Fixed",
			durationBarVisible: true,
			timeRangeSelectedHandling: "Enabled",
			onBeforeHeaderRender: args => {
				args.header.html = args.header.start.toString("dddd");
			},
			onTimeRangeSelected: args => {
			  let dp = this.calendar;
			  DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function(modal) {
				dp.clearSelection();
				if (!modal.result) { return; }
				var ev = new DayPilot.Event({
					start: args.start,
					end: args.end,
					id: DayPilot.guid(),
					text: modal.result
				})
				dp.events.add(ev);
			  });
			},
			eventDeleteHandling: "Update",
			onEventClick: args => {
			  let dp = this.calendar;
			  DayPilot.Modal.prompt("Update event text:", args.e.text()).then(function(modal) {
				if (!modal.result) { return; }
				args.e.data.text = modal.result;
				dp.events.update(args.e);
			  });
			},
		};
	}

	componentDidMount() {

		//load event data
		this.setState({
		  startDate: "2021-04-25",
		  events: [
			{
			  id: 1,
			  text: "SE319 Lecture",
			  start: "2021-04-26T11:00:00",
			  end: "2021-04-26T11:50:00"
			},
			{
			  id: 2,
			  text: "SE319 Lecture",
			  start: "2021-04-28T11:00:00",
			  end: "2021-04-28T11:50:00"
			},
			{
			  id: 3,
			  text: "SE319 Lab",
			  start: "2021-04-30T11:00:00",
			  end: "2021-04-30T11:50:00"
			},
		  ]
		});
	}
	

	render() {
		const navStyle = {
			float: 'left',
			width: '15%',
			height: '100%',
			background: '#545F66',
			padding: '5px',
			marginTop: '-60px',
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

		var {...config} = this.state;
		const moment = require('moment');
		var date = moment().format('dddd') + ", " + moment().format('MMMM Do');
		var time = moment().format('LT');

		return(
			<div style = {{letterSpacing: '4px'}}>
				<nav style={navStyle}>
					<ul style={navUlStyle}>
						<h3 className = "navheader">NAVIGATION</h3>
						<div><a href = "/" className = "navbutton">Home</a></div>
						<div><a href = "/today" className = "navbutton">Today</a></div>
						<div><a href = "/calendar" className = "navbutton">Calendar</a></div>
						<div><a href = "/class-schedule" className = "navbutton" style = {{background: '#434c52', width: '75%'}}>Class<br></br>Schedule</a></div>
						<div><a href = "/lists" className = "navbutton">Lists</a></div>
					</ul>
				</nav>

				<div style = {{marginLeft: '17%'}}>

					<h3 className = "pageheader">CLASS SCHEDULE</h3> 

					<div style = {{borderRadius: '25px', width: '85%', height: '125px', background: '#545F66', color: 'white',
									marginLeft: '7%', marginBottom: '20px', letterSpacing: '3px'}}>
						<br></br>
						<h1 style = {{marginTop: '-3px'}}>{ date }</h1>
						<h2 style = {{marginTop: '-10px'}}>{ time }</h2>
						<br></br>
					</div>

					{/* THE CODE FOR THE WEEKLY CALENDAR WAS GOTTEN FROM A PREMADE REACT COMPONENT
					Title: HTML5 Event Calendar Component
					Author:  DayPilot
					Date: 2018 (?)
					Availability: https://npm.daypilot.org/ */}
					<div className = "weekcontainer" style = {{ width: '93%', fontWeight: 'bold' }}>
						<div className = "bluebox" style = {{width: '525%'}}>
							<div style = {{borderRadius: '25px', marginRight: '0%', width: '100%'}}>
								<DayPilotCalendar
									{...config}
									ref={component => {
										this.calendar = component && component.control;
									}}
								/>
							</div>
						</div>
						
					</div>
				</div>	<br></br>
			</div>
		);
	}
}

export default ClassSched;