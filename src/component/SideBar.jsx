import React from "react";
import { Drawer, ListItem, ListItemIcon, ListItemText, List, Divider, Toolbar, Button } from "@material-ui/core"
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
  drawer: {
    width: "160px",
  },
  drawerPaper: {
    backgroundColor: "#383838",
   
  },
  fontColor: {
    color:  "#ff1a1a"
  },
  listItems: {
    marginBottom: "20px",
    alignItems: "center",
    justifyContent: "center"
  },
  listContainer: {
    marginTop: "200px"
  },
  listSocial: {
    marginBottom: "6px",
    alignItems: "center",
    justifyContent: "center"
  },
  socialContainer: {
    marginTop: "90px"
  }
})

const SideBar = props => {
  const { history } = props
  const classes = useStyles();
  const itemsList = [
    {
      text:'Home',
      icon: <HomeIcon style={{ color:  "#ff1a1a"}} />,
      onClick: () => history.push('/')
    },
    {
      text: 'About me',
      icon: <PersonIcon style={{ color:  "#ff1a1a"}} />,
      onClick: () => history.push('/about')
    }, 
    {
      text:'Skills',
      icon:<SettingsApplicationsIcon style={{ color:  "#ff1a1a"}} />,
      onClick: () => history.push('/skills')
    },
    {
      text: 'Projects',
      icon: <WorkIcon style={{ color:  "#ff1a1a"}} />,
      onClick: () => history.push('/projects')
    },
    { text: 'Contact Me',
      icon: <MailIcon style={{ color:  "#ff1a1a"}} />,
      onClick: () => history.push('/contact')
    },
  ];
  const iconsList = [
    {
      text:'LinkedIn',
      icon: <LinkedInIcon style={{ color:  "#ff1a1a"}} />
    },
    {
      text: 'GitHub',
      icon: <GitHubIcon style={{ color:  "#ff1a1a"}} />
    }, 
  ];
  return (
     <Drawer variant="permanent" className={classes.drawer} classes={{
      paper: classes.drawerPaper,
    }}>
       <ListItem button>
         <img src='./images/nnlogo.png' alt='logo' width="100"></img>
       </ListItem>
      <Divider />
       <List className={classes.listContainer}>
          {itemsList.map((item, index) => {
            const { icon, onClick} = item;
            return(
            <ListItem button className={classes.listItems} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
            </ListItem>
          )})}
        </List>
        <Divider />
        <List className={classes.socialContainer}>
          {iconsList.map((item, index) => {
            const { icon } = item;
            return(
            <ListItem button className={classes.listSocial}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
            </ListItem>
          )})}
        </List>
     </Drawer>
  );
};

export default withRouter(SideBar);

