import React, { Component } from 'react'

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
// var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
    }, false);
}

class Lists extends Component {

    // Create a new list item when clicking on the "Add" button
    newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);

        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("myUL").appendChild(li);
        }

        document.getElementById("myInput").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            }
        }
    }

    render() {
        const navStyle = {
            float: 'left',
            width: '15%',
            height: '104%',
            background: '#545F66',
            padding: '5px',
            marginTop: '-4%',
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

    return (
        <div>
            <nav style={navStyle}>
                <ul style={navUlStyle}>
                    <br></br>
                    <h3 className = "navheader">NAVIGATION</h3>
					<div><a href = "/" className = "navbutton">Home</a></div>
					<div><a href = "/today" className = "navbutton">Today</a></div>
					<div><a href = "/calendar" className = "navbutton">Calendar</a></div>
					<div><a href = "/class-schedule" className = "navbutton">Class<br></br>Schedule</a></div>
					<div><a href = "/lists" className = "navbutton" style = {{background: '#434c52', width: '75%'}}>Lists</a></div>
                </ul>
            </nav>

            <div style ={{marginLeft: '17%', minWidth: '250px', alignItems: 'center'}}>
                <h3 className = "pageheader">LIST</h3> 
                
                <div className="container" style={{
                    width: '1000px', 
                    height: '800px',
                    gridtemplatecolumns: '285px 285px 285px',
                    gridrow: '600px 600px'}}>
                        
                    <div id="myDIV" className="header" style={{border: 'solid', borderRadius: '25px', width: '300px', marginleft: '10px', borderradius: '25px'}}>
                        <h2>My To Do List</h2>
                        <input type="text" id="myInput" placeholder="Add something..."/><br></br>
                        <span onClick={this.newElement} className="addBtn">Add</span>
                    </div>
                        
                    <div style = {{float: 'right', marginLeft: '10%'}}>
                        <ul id="myUL">
                            <li>Doctor Appt</li>
                            <li className="checked">Groceries</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Lists;