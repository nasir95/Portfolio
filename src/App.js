import React,{Component} from "react"
import './App.css';
import SideBar from './component/SideBar';
import Home from './pages/home';
import About from './pages/about';
import { withStyles } from "@material-ui/core/styles"
import {Route, Switch} from "react-router-dom"
import { Grid } from "@material-ui/core"
import { disableBodyScroll } from 'body-scroll-lock';


const useStyles = theme => ({
  container: {
    display: "flex",
    backgroundColor: "#1f1f1f",
    height: "790px",
  },
})

class App extends Component {

  targetElement = null;

  componentDidMount() {
    this.targetElement = document.querySelector('#grid');
    disableBodyScroll(this.targetElement);
  }
  render(){
    const {classes} = this.props;
  return (
   <Grid  container item xs={12} className={classes.container} id="grid" >
   <SideBar />
   <Switch>
   <Route exact from="/" render={props => <Home {...props} />} />
   <Route exact from="/about" render={props => <About {...props} />} />
   </Switch>
   </Grid>
   )}
  }
export default withStyles(useStyles)(App);
