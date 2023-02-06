import React from "react";
import { ListItem, ListItemIcon, List, Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from "@material-ui/icons/Person";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import WorkIcon from "@material-ui/icons/Work";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { withRouter } from "react-router-dom";
import newlogo from "../icons/newlogo.svg";

const useStyles = makeStyles({
  sideBarContainer: {
    direction: "column",
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    fontColor: "#f7f7f7",
    minHeight: "100vh",
  },
  listItems: {
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    width: "100%",
  },
  listSocial: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    justifyContent: "center",
    backgroundColor: "#EB5757",
  },
});

const SideBar = (props) => {
  // function changeColor(e) {
  //   e.target.style.color = 'red';
  // }

  // function  changeColorBack(e) {
  //   e.target.style.color = '#f7f7f7"';
  // }

  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon style={{ color: "#EB5757" }} />,
      onClick: () => history.push("/"),
    },
    {
      text: "About me",
      icon: <PersonIcon style={{ color: "#EB5757" }} />,
      onClick: () => history.push("/about"),
    },
    {
      text: "Skills",
      icon: <SettingsApplicationsIcon style={{ color: "#EB5757" }} />,
      onClick: () => history.push("/skills"),
    },
    {
      text: "Projects",
      icon: <WorkIcon style={{ color: "#EB5757" }} />,
      onClick: () => history.push("/projects"),
    },
    {
      text: "Contact Me",
      icon: <MailIcon style={{ color: "#EB5757" }} />,
      onClick: () => history.push("/contact"),
    },
  ];
  const iconsList = [
    {
      text: "LinkedIn",
      icon: <LinkedInIcon style={{ color: "#EB5757" }} />,
    },
    {
      text: "GitHub",
      icon: <GitHubIcon style={{ color: "#EB5757" }} />,
    },
  ];
  return (
    <Grid container>
      <ListItem button className={classes.image}>
        <img src={newlogo} alt="logo"></img>
      </ListItem>
      <Grid
        container
        className={classes.sideBarContainer}
        disableGutters
        spacing={0}
      >
        <Divider />
        <List className={classes.listContainer}>
          {itemsList.map((item, index) => {
            const { icon, onClick } = item;
            return (
              <ListItem button className={classes.listItems} onClick={onClick}>
                {icon && <ListItemIcon id="List">{icon}</ListItemIcon>}
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List className={classes.listContainer}>
          {iconsList.map((item) => {
            const { icon } = item;
            return (
              <ListItem button className={classes.listSocial}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};

export default withRouter(SideBar);
