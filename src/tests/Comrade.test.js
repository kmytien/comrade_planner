import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import './mockfile';

import About from '../comrade/About'
import Calendar from '../comrade/Calendar'
import ClassSched from '../comrade/ClassSched'
import Lists from '../comrade/Lists'
import Today from '../comrade/Today'
import ComradeFront from '../comrade/ComradeFront'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// COMRADE FRONT TESTS
test('renders ComradeFront word content', () => {
  render(<ComradeFront />);
  
  // render welcome to
  const wtElement = screen.getByText(/Welcome To/i);
  expect(wtElement).toBeInTheDocument();

  // render comrade
  const cElement = screen.getByText(/COMRADE/i);
  expect(cElement).toBeInTheDocument();
  // // render about
  const abtElement = screen.getByText(/About/i);
  expect(abtElement).toBeInTheDocument(); 
});
test('renders ComradeFront button content', () => {
  render(<ComradeFront />);
  
  // render themes
  // expect(screen.getByText('Theme 1').closest('a')).toHaveAttribute('href', '#')
  // expect(screen.getByText('Theme 2').closest('a')).toHaveAttribute('href', '#')
  // expect(screen.getByText('Theme 3').closest('a')).toHaveAttribute('href', '#')
  // render today button
  expect(screen.getByText('Today').closest('a')).toHaveAttribute('href', '/today')
  // render class sched button
  expect(screen.getByText('ClassSchedule').closest('a')).toHaveAttribute('href', '/class-schedule')
  // render calendar button
  expect(screen.getByText('Calendar').closest('a')).toHaveAttribute('href', '/calendar')
  // render list button
  expect(screen.getByText('Lists').closest('a')).toHaveAttribute('href', '/lists')
  // render about linking
  expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about')
});

// ABOUT TESTS
// render nav
test('render About nav content', () => {
  render(<About />);

  // render NAVIGATION word
  expect(screen.getByText(/NAVIGATION/i)).toBeInTheDocument(); 
  // render href home
  expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
  // render href today
  expect(screen.getByText('Today').closest('a')).toHaveAttribute('href', '/today')
  // render href calendar
  expect(screen.getByText('Calendar').closest('a')).toHaveAttribute('href', '/calendar')
  // render href class schedule
  expect(screen.getByText('ClassSchedule').closest('a')).toHaveAttribute('href', '/class-schedule')
  // render href lists
  expect(screen.getByText('Lists').closest('a')).toHaveAttribute('href', '/lists')
});
// render content images
test('render About image content', () => {
  // render(<About />);
  const { getByAltText } = render(<About />);
  // render images
  expect(getByAltText('Picture of MyTien').src).toContain('http://localhost/mytien.jpeg');
  expect(getByAltText('Picture of Haylee').src).toContain('http://localhost/haylee.jpeg');
  expect(getByAltText('Picture of Sanjana').src).toContain('http://localhost/sanjana.jpeg');
  expect(getByAltText('Picture of Lincoln').src).toContain('http://localhost/lincoln.jpeg');
});
test('render About word content', () => {
  render(<About />);

  expect(screen.getByText(/ABOUT/i)).toBeInTheDocument(); 
  expect(screen.getByText(/The Comrade Planner/i)).toBeInTheDocument(); 

  expect(screen.getByText(/This website was made for our SE 319 Class:/i)).toBeInTheDocument(); 
  expect(screen.getByText(/Our goals for this planner were to:/i)).toBeInTheDocument(); 
  expect(screen.getByText(/- Create a website that allows users to make/i)).toBeInTheDocument(); 
  expect(screen.getByText(/- Provide that customization necessary/i)).toBeInTheDocument(); 
  expect(screen.getByText(/- Import other calenders/i)).toBeInTheDocument(); 
  expect(screen.getByText(/- Create a reminder/i)).toBeInTheDocument(); 
  expect(screen.getByText(/- Provide a calming yet diverse/i)).toBeInTheDocument(); 

  expect(screen.getByText(/Project Team 13 Members/i)).toBeInTheDocument(); 
  expect(screen.getByText(/Second Year ISU Students/i)).toBeInTheDocument(); 

  expect(screen.getByText(/MyTien Kien/i)).toBeInTheDocument(); 
  expect(screen.getByText(/Loves Designing/i)).toBeInTheDocument(); 
  expect(screen.getByText(/kmytien@gmail.com/i)).toBeInTheDocument(); 
  
  expect(screen.getByText(/Haylee Lawrence/i)).toBeInTheDocument(); 
  expect(screen.getByText(/React.js Guru/i)).toBeInTheDocument(); 
  expect(screen.getByText(/Dog Lover/i)).toBeInTheDocument(); 

  expect(screen.getByText(/Sanjana Amatya/i)).toBeInTheDocument();
  expect(screen.getByText(/Weather Gorl/i)).toBeInTheDocument(); 
  expect(screen.getByText(/sanjana@amatya.net/i)).toBeInTheDocument();

  expect(screen.getByText(/Lincoln Khongmaly/i)).toBeInTheDocument(); 
  expect(screen.getByText(/Calendar Populator/i)).toBeInTheDocument(); 
  expect(screen.getByText(/Networking King/i)).toBeInTheDocument(); 
});

// CALENDAR TESTS
// render nav
test('render Calendar nav content', () => {
  render(<Calendar />);

  // render NAVIGATION word
  expect(screen.getByText(/NAVIGATION/i)).toBeInTheDocument(); 
  // render href home
  expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
  // render href today
  expect(screen.getByText('Today').closest('a')).toHaveAttribute('href', '/today')
  // render href calendar
  expect(screen.getByText('Calendar').closest('a')).toHaveAttribute('href', '/calendar')
  // render href class schedule
  expect(screen.getByText('ClassSchedule').closest('a')).toHaveAttribute('href', '/class-schedule')
  // render href lists
  expect(screen.getByText('Lists').closest('a')).toHaveAttribute('href', '/lists')
});

// CLASS SCHEDULE TESTS
// render nav
test('render Class Sched nav content', () => {
  render(<ClassSched />);

  // render NAVIGATION word
  expect(screen.getByText(/NAVIGATION/i)).toBeInTheDocument(); 
  // render href home
  expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
  // render href today
  expect(screen.getByText('Today').closest('a')).toHaveAttribute('href', '/today')
  // render href calendar
  expect(screen.getByText('Calendar').closest('a')).toHaveAttribute('href', '/calendar')
  // render href class schedule
  expect(screen.getByText('ClassSchedule').closest('a')).toHaveAttribute('href', '/class-schedule')
  // render href lists
  expect(screen.getByText('Lists').closest('a')).toHaveAttribute('href', '/lists')
});
// render words
test('render sched word content', () => {
  render(<ClassSched />);

  expect(screen.getByText(/CLASS SCHEDULE/i)).toBeInTheDocument();   
});

// LISTS TESTS
// render nav
test('render Lists nav content', () => {
  render(<Lists />);

  // render NAVIGATION word
  expect(screen.getByText(/NAVIGATION/i)).toBeInTheDocument(); 
  // render href home
  expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
  // render href today
  expect(screen.getByText('Today').closest('a')).toHaveAttribute('href', '/today')
  // render href calendar
  expect(screen.getByText('Calendar').closest('a')).toHaveAttribute('href', '/calendar')
  // render href class schedule
  expect(screen.getByText('ClassSchedule').closest('a')).toHaveAttribute('href', '/class-schedule')
  // render href lists
  expect(screen.getByText('Lists').closest('a')).toHaveAttribute('href', '/lists')
});
// render words
test('render Lists word content', () => {
  render(<Lists />);

  expect(screen.getByText(/My To Do List/i)).toBeInTheDocument();  
  expect(screen.getByText(/Add/i)).toBeInTheDocument();   
});
// render todo stuff
test('render Lists TODO content', () => {
  render(<Lists />);

  // add button and its onclick
  // expect(screen.getByText('Add').closest('span')).toHaveAttribute('className', 'addBtn')
  // doctor appt (not checked)  
  // groceries (checked)
  // add something box
  // simulate adding something? when added, starts unchecked
});

// TODAY TESTS
// render nav
test('render Today nav content', () => {
  render(<Today />);

  // render NAVIGATION word
  expect(screen.getByText(/NAVIGATION/i)).toBeInTheDocument(); 
  // render href home
  expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
  // render href today
  expect(screen.getByText('Today').closest('a')).toHaveAttribute('href', '/today')
  // render href calendar
  expect(screen.getByText('Calendar').closest('a')).toHaveAttribute('href', '/calendar')
  // render href class schedule
  expect(screen.getByText('ClassSchedule').closest('a')).toHaveAttribute('href', '/class-schedule')
  // render href lists
  expect(screen.getByText('Lists').closest('a')).toHaveAttribute('href', '/lists')
});
// render words
test('render Today word content', () => {
  render(<Today />);

  expect(screen.getByText(/Clean room/i)).toBeInTheDocument();  
  expect(screen.getByText(/Walk the dog/i)).toBeInTheDocument();   
  expect(screen.getByText(/Get Gas/i)).toBeInTheDocument();  
  expect(screen.getByText(/Math hw/i)).toBeInTheDocument();
  expect(screen.getByText(/Call mom/i)).toBeInTheDocument();  
  expect(screen.getByText(/Do the dishes/i)).toBeInTheDocument();

  expect(screen.getByText(/SUBMIT/i)).toBeInTheDocument();
  expect(screen.getByText(/Motivate me!/i)).toBeInTheDocument();
  expect(screen.getByText(/You got this!/i)).toBeInTheDocument();
});