import React from "react"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles({
    container: {
      display:"flex",
      color: "#f7f7f7",
      margin: "auto"
    }, 
    imgContainer: {
      display:"flex",
    }
  })
const Home = props => {
    const classes = useStyles();
        return (
          <>
            <img className={classes.imgContainer} src='./images/nnlogo.png' alt='logo' width="100"></img>
            <h1 className={classes.container}> Hello, my name is Nasir Nooruddin and <br />
            I am a full stack software engineer. </h1>
          </>
        );
    }


export default Home;