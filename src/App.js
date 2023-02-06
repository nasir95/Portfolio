import React,{Component} from "react"
import './App.css';
import SideBar from './component/SideBar';
import Home from './pages/home';
import About from './pages/about';
import { withStyles } from "@material-ui/core/styles"
import {Route, Switch} from "react-router-dom"
import { Grid } from "@material-ui/core"
import { disableBodyScroll } from 'body-scroll-lock';
import Skills from "./pages/skills";


const useStyles = theme => ({
  container: {
    display: "flex",
    backgroundColor: "#333333",
    height:"100vh"
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
   <Grid  container id="grid" className={classes.container} >
     <Grid item xs={3} lg={1}>
        <SideBar />
      </Grid>
     <Grid item xs={9} lg={11} className={classes.container}>
          <Switch>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact from="/about" render={props => <About {...props} />} />
            <Route exact from="/skills" render={props => <Skills {...props} />} />
          </Switch>
      </Grid>
   </Grid>
   )}
  }
export default withStyles(useStyles)(App);
