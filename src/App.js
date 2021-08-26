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
   <Grid  container id="grid" >
     <Grid item xs={1}>
        <SideBar />
      </Grid>
     <Grid item xs={11} className={classes.container}>
          <Switch>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact from="/about" render={props => <About {...props} />} />
          </Switch>
      </Grid>
   </Grid>
   )}
  }
export default withStyles(useStyles)(App);
