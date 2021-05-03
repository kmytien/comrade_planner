let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Moms Birthday',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Lunch with friends',
    start: todayStr
  }
]

export function createEventId() {
  return String(eventGuid++)
}

// THE CODE FOR THIS UTILS FILE WAS GOT FROM A FULLCALENDAR.IO DEMO FROM THEIR WEBSITE
// 					Title: fullCalendar.io demo
// 					Author:  FullCalendar LLC
// 					Date: 2021
// 					Code version: v5.6.0
// 					Availability: https://codesandbox.io/s/github/fullcalendar/fullcalendar-example-projects/tree/master/react?file=/src/DemoApp.jsx:312-364