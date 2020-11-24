import React from "react";
import { Drawer, ListItem, ListItemIcon, ListItemText, List } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles({
  drawer: {
    width: "160px"
  }
})

const SideBar = props => {
  const classes = useStyles();
  const itemsList = [
    {
      text:'Home',
      icon: <HomeIcon />
    },
    {
      text: 'About me',
      icon: <PersonIcon/>
    }, 
    {
      text:'Skills',
      icon:<SettingsApplicationsIcon />
    },
    {
      text: 'Projects',
      icon: <WorkIcon />
    },
    { text: 'Contact Me',
      icon: <MailIcon />
    },
  ];
  return (
     <Drawer variant="permanent" className={classes.drawer}>
       <List>
          {itemsList.map((item, index) => {
            const { icon} = item;
            return(
            <ListItem button >
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              {/* <ListItemText primary={text} /> */}
            </ListItem>
          )})}
        </List>
     </Drawer>
  );
};

export default SideBar;

 {/* <img src="/images/logo.png" alt="logo" /> */}