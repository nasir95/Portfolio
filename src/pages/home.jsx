import React, {Component} from "react"
import Card from '@material-ui/core/Card';
import { Box, CardContent, Grid, Paper } from "@material-ui/core";
import newlogo from '../icons/newlogo.svg'


//Array
const textArray = ["full stack software engineer", "refugee", "gamer", "sports fan"];

// Styling
   const container = {
      display:"flex",
      margin: "auto",
    };

    const cardContainer = {
      direction:"column",
      color: "#1f1f1f",
      backgroundColor: "#EB5757",
      justifyContent: "center",
      textAlign: "center",  
      minHeight: "100vh",
          
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
          // <Grid container spacing={2}>
          //   <Box xs={6} lg={6}sx={{
          //     width: 300,
          //     height: 300,
          //     backgroundColor: 'primary.dark',
          //     '&:hover': {
          //       backgroundColor: 'primary.main',
          //       opacity: [0.9, 0.8, 0.7],
          //     }
          //   }}>
          //    <Card style={cardContainer}>
          //      <CardContent style={text}>
          //        <span>Hello world, my name is Nasir Nooruddin and <br />
          //        I am a {textThatChanges}.</span> 
          //       </CardContent> 
          //     </Card>  
          //   </Box>
          //   <Box item xs={6} lg={6} style={container}>
          //     <Card> 
          //      <CardContent style={imgContainer}> 
          //        <img src={newlogo} alt='logo' ></img>
          //      </CardContent> 
          //     </Card>
          //   </Box>
          // </Grid>
          <Grid container>
            
          </Grid>
        );
    }
  }


export default Home;