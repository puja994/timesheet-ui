
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './pages/login/Login'
import {Dashboard} from './pages/dashboard/Dashboard.page'
import {Employee} from './pages/employee/Employee'
import {Shifts} from './pages/shifts/Shifts'



function App() {
  return (
    <div className="App">
     
     <Router>
       <Switch>

         <Route exact path="/dashboard">
           <Dashboard />
         </Route>

         <Route exact path="/shifts">
           <Shifts />
         </Route>


         <Route exact path="/employee">
           <Employee />
         </Route>

         <Route path="/">
           <Login />
         </Route>

         <Route path="*">
						<h1>404 Page not found</h1>
					</Route>

       </Switch>
     </Router>
    
    </div>
  );
}

export default App;
