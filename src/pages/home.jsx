import React, {Component} from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from "@material-ui/core";
import newlogo from '../icons/newlogo.svg'

//Array
const textArray = ["full stack software engineer", "refugee", "gamer", "sports fan"];

// Styling
   const container = {
      display:"flex",
      margin: "auto",
    };

    const cardContainer = {
      display:"flex",
      color: "#1f1f1f",
      backgroundColor: "#EB5757",
      margin: "auto",
      width: "50%",
      height: "300px",
      justifyContent: "center",
      textAlign: "center"      
    }; 

    const imgContainer= {
      display:"flex",
      textAlign: "center",
      justifyContent: "center"
    }; 

    const text = {
      display:"flex",
      textAlign: "center",
      margin: "auto",
      justifyContent: "center",
      fontSize:"2em"
    };
  
class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3000);
  }
  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render (){
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
        return (
          <Grid container>
            <Grid item xs={6} style={container}>
              <Card style={cardContainer}> 
               <CardContent style={text}>
                 <span>Hello world, my name is Nasir Nooruddin and <br />
                 I am a {textThatChanges}.</span> 
                </CardContent> 
              </Card>
            </Grid>
            <Grid item xs={6} style={container}>
              <Card style={cardContainer}> 
               <CardContent style={imgContainer}> 
                 <img src={newlogo} alt='logo' ></img>
               </CardContent> 
              </Card>
            </Grid>
          </Grid>
        );
    }
  }


export default Home;