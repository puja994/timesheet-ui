
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './pages/login/Login'
import {Dashboard} from './pages/dashboard/Dashboard.page'


function App() {
  return (
    <div className="App">
     
     <Router>
       <Switch>
         <Route exact path="/dashboard">
           <Dashboard />
         </Route>

         <Route path="/">
           <Login />
         </Route>

       </Switch>
     </Router>
    
    </div>
  );
}

export default App;
