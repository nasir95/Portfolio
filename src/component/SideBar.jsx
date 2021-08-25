import React, { useState } from "react";
import { Drawer, ListItem, ListItemIcon,  List, Divider,  } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import WorkIcon from '@material-ui/icons/Work';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles({
  drawerPaper: {
    display: "flex",
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    fontColor: "#f7f7f7"
  },
  listItems: {
    marginBottom: "5px",
  },
  listContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: "auto 0"
  },
  listSocial: {
    marginTop: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
  }
})

const SideBar = props => {

 

  // function changeColor(e) {
  //   e.target.style.color = 'red';
  // }

  // function  changeColorBack(e) {
  //   e.target.style.color = '#f7f7f7"';
  // }

  const { history } = props
  const classes = useStyles();
  const itemsList = [
    {
      text:'Home',
      icon: <HomeIcon style={{ color:  "#f7f7f7", }} />,
      onClick: () => history.push('/')
    },
    {
      text: 'About me',
      icon: <PersonIcon style={{ color:  "#f7f7f7",}} />,
      onClick: () => history.push('/about')
    }, 
    {
      text:'Skills',
      icon:<SettingsApplicationsIcon style={{ color:  "#f7f7f7"}} />,
      onClick: () => history.push('/skills')
    },
    {
      text: 'Projects',
      icon: <WorkIcon style={{ color:  "#f7f7f7"}} />,
      onClick: () => history.push('/projects')
    },
    { text: 'Contact Me',
      icon: <MailIcon style={{ color:  "#f7f7f7"}} />,
      onClick: () => history.push('/contact')
    },
  ];
  const iconsList = [
    {
      text:'LinkedIn',
      icon: <LinkedInIcon style={{ color:  "#f7f7f7"}} />
    },
    {
      text: 'GitHub',
      icon: <GitHubIcon style={{ color:  "#f7f7f7"}} />
    }, 
  ];
  return (
     <Drawer variant="permanent" classes={{
      paper: classes.drawerPaper,
    }}anchor="left">
       <ListItem button className={classes.image}>
         <img src='./images/nnlogo.png' alt='logo' width="75" height="50"></img>
       </ListItem>
      <Divider />
       <List className={classes.listContainer}>
          {itemsList.map((item, index) => {
            const { icon, onClick} = item;
            return(
            <ListItem button className={classes.listItems} onClick={onClick}>
              {icon && <ListItemIcon id="List">{icon}</ListItemIcon>}
            </ListItem>
          )})}
        </List>
        <Divider />
        <List className={classes.listSocial}>
          {iconsList.map((item) => {
            const { icon } = item;
            return(
            <ListItem button >
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
            </ListItem>
          )})}
        </List>
     </Drawer>
  );
};

export default withRouter(SideBar);

