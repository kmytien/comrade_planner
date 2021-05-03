import './css/App.css'
import './css/com_style.css'


import About from './comrade/About'
import Calendar from './comrade/Calendar'
import ClassSched from './comrade/ClassSched'
import ComradeFront from './comrade/ComradeFront'
import Lists from './comrade/Lists'
import Today from './comrade/Today'

import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <ComradeFront /> */}
      {/* <Router> */}
      <Route exact path="/" component={ComradeFront} />
      <Route exact path="/about" component={About} />
      <Route exact path="/class-schedule" component={ClassSched} />
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/lists" component={Lists} />
      <Route exact path="/today" component={Today} />
      {/* </Router> */}
    </div>
  );
}

export default App;