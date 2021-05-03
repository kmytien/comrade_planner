// import { render } from '@fullcalendar/common';
import React from 'react'
import moment from 'moment'

function greeting(){
    var myDate = new Date();
    var hrs = myDate.getHours();
    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    return greet;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = "";
    m = checkTime(m);
  
    if (h > 12) {
      h = h - 12;
      ampm = " PM";
    } else if (h == 12) {
      h = 12;
      ampm = " AM";
    } else if (h < 12) {
      ampm = " AM";
    } else {
      ampm = "PM";
    }
  
    if (h == 0) {
      h = 12;
    }
  
    var t = setTimeout(function () {
      startTime();
    }, 500);
}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
}

function startDate() {
    var d = new Date();
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
}

class DailyList extends React.Component {
    render() {
        return (
            <nav>
                <ul style={{fontSize: 50, alignItems: "left", color: "white"}}>
                    {this.props.daily_items.map(function(item){return <li key = {item} style={{backgroundColor: "#545F66", fontSize: 25, textAlign: "left"}}>
                                                                        <input type="checkbox" id="item" name="item" style={{marginLeft: '-10%', height: 20, width: 20}}></input>
                                                                        <label htmlFor="item">{item}</label></li> })}
                </ul>
                <form onSubmit = {this.props.handleAddDailyItem}>
                    <input type = "text" name = "new_item" />
                    <button>Add item</button>
                </form>
            </nav>
        );
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <nav>
                <ul style={{fontSize: 50, textAlign: "left", color: "#545F66"}}>
                    {this.props.todo_items.map(function(item){return <li key = {item} style={{backgroundColor: "#D0F4EA", fontSize: 25,}}>
                                                                        <input type="checkbox" id="item" name="item" style={{marginLeft: '-10%', height: 20, width: 20}}></input>
                                                                        <label htmlFor="item" style={{marginLeft: "10"}}>{item}</label></li> })}
                </ul>
                <form onSubmit = {this.props.handleAddTodoItem}>
                    <input type = "text" name = "new_item" />
                    <button>Add item</button>
                </form>
            </nav>
        );
    }
}

const apiKey = "0a671932a93d6396daef092099786578";

function weather(e){
  const form = document.getElementById("weatherapp");
  const input = document.getElementById("weatherInput");
  const msg = document.getElementById("weatherMSG");
  const list = document.getElementById("weatherOut");

  e.preventDefault();
  let inputVal = input.value;

  //check if there's already a city
  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
      const filteredArray = listItemsArray.filter(el => {
      let content = "";
      if (inputVal.includes(",")) {
          if (inputVal.split(",")[1].length > 2) {
          inputVal = inputVal.split(",")[0];
          content = el
              .querySelector(".city-name span")
              .textContent.toLowerCase();
          } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
          }
      } else {
          content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content === inputVal.toLowerCase();
      });

      if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${
          filteredArray[0].querySelector(".city-name span").textContent
      } ...otherwise be more specific by providing the country code as well `;
      form.reset();
      input.focus();
      return;
      }
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
          weather[0]["icon"]
      }.svg`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
          <h3 className="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
          </h3>
          <div className="city-temp">${Math.round(main.temp)}<sup>°F</sup></div>

          <figure>
          <img className="city-icon" src="${icon}" alt="${weather[0]["description"]}">
          <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
      })
      .catch(() => {
      msg.textContent = "Please search for a valid city ";
      });

  msg.textContent = "";
  form.reset();
  input.focus();
}

var list = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
    }, false);
}

function genQuote() {
    var randNum = Math.floor(Math.random() * 8) + 1;
    document.getElementById('quote-source').innerHTML = quotes[randNum];
}
  
var quotes = [
    "Blank",
    '"Dude, suckin\' at something is the first step at being sorta good at something."<br>-  Jake <small><em>(Adventure Time)</em></small>',
    '"Either I will find a way, or I will make one."<br> - Philip Sidney',
    '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."<br>- Thomas A. Edison',
    '"You are never too old to set another goal or to dream a new dream."<br>- C.S Lewis',
    '"If you can dream it, you can do it."<br>- Walt Disney',
    '"Never give up, for that is just the place and time that the tide will turn."<br>- Harriet Beecher Stowe',
    "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali",
    '"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them."<br>- Bruce Lee'
];

window.onload = function(){
    startTime(); 
    startDate();
}

class Today extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            daily_items : ['Clean room', 
                                 'Walk the dog', 
                                 'Get gas'],
            todo_items : ['Math hw', 
                          'Call mom', 
                          'Do the dishes']
        };
        this.handleAddDailyItem = this.handleAddDailyItem.bind(this);
        this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    }

    handleAddDailyItem(event) {
        event.preventDefault();
        const new_item = event.target.elements.new_item.value.trim();

        if(!new_item) {
            alert('Enter valid value to add item');
        }

        this.setState(function(prevState, props){
            return {
                daily_items: prevState.daily_items.concat(new_item)
            };
        });
    }

    handleAddTodoItem(event) {
        event.preventDefault();
        const new_item = event.target.elements.new_item.value.trim();

        if(!new_item) {
            alert('Enter valid value to add item');
        }

        this.setState(function(prevState, props){
            return {
                todo_items: prevState.todo_items.concat(new_item)
            };
        });
    }

    deleteItem() {
        const newArray = this.state.data.slice(0, -1)
     
        this.setState({
            data: newArray
        });
     }

    render() {
        var date = moment().format('dddd') + ", " + moment().format('MMMM Do');
		var time = moment().format('LT');
        return (
            <div>
                <nav style={{float: 'left',
            width: '15%',
            height: '100%',
            background: '#545F66',
            padding: '5px',
            marginTop: '-50px',
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
                        <div><a href = "/today" className = "navbutton" style = {{background: '#434c52', width: '75%'}}>Today</a></div>
                        <div><a href = "/calendar" className = "navbutton">Calendar</a></div>
                        <div><a href = "/class-schedule" className = "navbutton">Class<br></br>Schedule</a></div>
                        <div><a href = "/lists" className = "navbutton">Lists</a></div>
                    </ul>
                </nav>  
                    <div style={{marginLeft: '18%'}}>
                        <h3 className = "pageheader">TODAY</h3>
                        <h2 className = "sub-header">{greeting()}</h2>

                        <div style = {{boxSizing: 'border-box', marginLeft: '1.5%'}}>
                        <div className = "row">
                            <div className = "column" style = {{borderRadius: '25px', margin: '20px', padding: '15px', height: '1190px', backgroundColor: '#545F66'}}>
                                <p className = "aboutpara" style = {{color: '#fff'}}>Enter Daily Content Here<br></br><br></br></p>
                                <DailyList daily_items = {this.state.daily_items} handleAddDailyItem = {this.handleAddDailyItem} />
                            </div>

                            <div className = "column" style = {{borderRadius: '25px', margin: '20px', padding: '15px', backgroundColor: '#D0F4EA', height: '573px'}}>
                                <p className = "aboutpara">To Do List for Today<br></br><br></br></p>
                                <TodoList todo_items = {this.state.todo_items} handleAddTodoItem = {this.handleAddTodoItem} />
                            </div>

                            <div className = "column" style = {{borderRadius: '25px', margin: '20px', padding: '15px', backgroundColor: '#B1CC74', height: '573px'}}>
                                <p className = "aboutpara" style = {{color: '#fff'}}>Weather...<br></br><br></br></p>
                                <form id = "weatherapp">
                                    <input type="text" id = "weatherInput" placeholder="Search for a city..." autoFocus></input>
                                    <button type="submit" onClick = {weather}>SUBMIT</button>
                                    <span id = "weatherMSG" className="msg"></span>
                                </form>
                                <section className="ajax-section">
                                <div className="weather-container">
                                    <p id = "weatherOut" className="cities"></p>
                                </div>
                                </section>
                            </div>

                            <div className = "column" style = {{borderRadius: '25px', margin: '20px', padding: '15px', backgroundColor: '#B1CC74', height: '573px'}}>
                                <p className = "aboutpara" style = {{color: '#fff'}}>Motivation for the day<br></br><br></br></p>
                                        <p id="quote-source" style={{fontSize: 30}}></p>      
                                        <button id="gen" type = "submit" onClick={genQuote}>Motivate me!</button>
                                        <p> You got this! :) </p>
                            </div>

                            <div className = "column" style = {{borderRadius: '25px', margin: '20px', padding: '15px', backgroundColor: '#D0F4EA', height: '573px', marginTop: '1.5%'}}>
                                <h1 className = "aboutpara">Today is a wonderful day!<br></br><br></br></h1>
                                    <h1>Date: </h1>
                                    <p style = {{fontSize: '30px'}}>{date}</p>
                                    <p><br></br></p>
                                    <h1>Time: </h1>
                                    <p style = {{fontSize: '30px'}}>{time}</p>
                                    <h1 id="display"></h1>
                                    <h1 className = "sub-header">{greeting()}</h1>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        );
    }
    
}

export default Today;
