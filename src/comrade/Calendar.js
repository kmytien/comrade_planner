import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'

export default class Calendar extends React.Component {
	/* THE CODE FOR THE ADDING AND DELETING EVENTS WAS INSPIRED/ CHANGED FOR OUR PURPOSES FROM A FULLCALENDAR.IO DEMO
					Title: fullCalendar.io
					Author:  FullCalendar LLC
					Date: 2021
					Code version: v5.6.0
					Availability: https://codesandbox.io/s/github/fullcalendar/fullcalendar-example-projects/tree/master/react?file=/src/DemoApp.jsx:312-364 */
	state = {
    	calendarEvents: []
  	};
	
	selectDate = (selectInfo) => {
		let title = prompt('Enter event title')
		let calendarApi = selectInfo.view.calendar
	
		calendarApi.unselect() // clear date selection
	
		if (title) {
		  	calendarApi.addEvent({
				id: createEventId(),
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay
		  	})
		}
	}
	
	deleteEvent = (clickInfo) => {
		// eslint-disable-next-line no-restricted-globals
		if (confirm(`Would you like to delete this event? '${clickInfo.event.title}'`)) {
		  	clickInfo.event.remove()
		}
	}
	
	setEvents = (events) => {
		this.setState({
		  	currentEvents: events
		})
	}
	 
	render() {
    	return(
        	<div>
            	<nav style={{float: 'left',
							 width: '15%',
							 height: '100%',
							 background: '#545F66',
							 padding: '5px',
							 marginTop: '-10px',
							 position: 'fixed',}}>
            		<ul style={{listStyleType: 'none',
								padding: '0',
								fontFamily: 'dream orphans',
								color: 'white',
								textAlign: 'center',
								fontSize: '20px',
								letterSpacing: '3px',}}>
            			<h3 className = "navheader">NAVIGATION</h3>
						<div><a href = "/" className = "navbutton">Home</a></div>
						<div><a href = "/today" className = "navbutton">Today</a></div>
						<div><a href = "/calendar" className = "navbutton" style = {{background: '#434c52', width: '75%'}}>Calendar</a></div>
						<div><a href = "/class-schedule" className = "navbutton">Class<br></br>Schedule</a></div>
						<div><a href = "/lists" className = "navbutton">Lists</a></div>
            		</ul>
        		</nav>

				{/* THE CODE FOR THE CALENDAR WAS GOTTEN FROM A PREMADE REACT COMPONENT
					Title: fullCalendar.io
					Author:  FullCalendar LLC
					Date: 2021
					Code version: v5.6.0
					Availability: https://fullcalendar.io/ */}

				<div style={{marginLeft: "18%",
							 marginTop: 5,
							 width: "80%",
							 height: "50%", }}>
					<FullCalendar
           				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}

						// set init vals
						initialView='dayGridMonth'
            			editable={true}
            			selectable={true}
            			selectMirror={true}
           	 			initialEvents={INITIAL_EVENTS}
						
						// called functions
            			select={this.selectDate}
            			eventContent={renderEventContent}
            			eventClick={this.deleteEvent}
            			eventsSet={this.setEvents}
          			/>
				</div>
        	</div>

    	);
	}
}

function renderEventContent(eventInfo) {
	return (
	  	<>
			<b>{eventInfo.timeText}</b>
			<i>{eventInfo.event.title}</i>
	  	</>
	)
}