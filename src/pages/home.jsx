import React from "react"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles({
    container: {
      display: "flex",
      width: "160px",
      
    }
  })
const Home = props => {
    const classes = useStyles();
        return (
            <h1> This Home Page </h1>
        );
    }


export default Home;