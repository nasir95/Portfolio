import { Grid } from "@material-ui/core";
import React from "react"
import TextCloud from "../component/TextCloud";

const container = {
  display:"flex",
  margin: "auto",
};

const Skills = props => {
        return (
            <Grid container style={container}>
              <Grid item xs={6}>
              <TextCloud/>
              </Grid>
            </Grid>
        );
    }


export default Skills;