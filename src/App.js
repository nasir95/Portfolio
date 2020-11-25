import './App.css';
import SideBar from './component/SideBar';
import Home from './pages/home';
import About from './pages/about';
import { makeStyles } from "@material-ui/core/styles"
import {Route, Switch} from "react-router-dom"

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "160px",
    
  }
})

function App() {
  const classes = useStyles();
  return (
   <div className={classes.container}>
   <SideBar />
   <Switch>
   <Route exact from="/" render={props => <Home {...props} />} />
   <Route exact from="/about" render={props => <About {...props} />} />
   </Switch>
   </div>
   )}

export default App;
