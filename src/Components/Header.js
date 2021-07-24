import React from "react";
import {
  Toolbar,
  IconButton,
  Divider,
  Typography,
  Badge,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SideDrawer from "./SideDrawer";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme)=>({
    title:{
       flexGrow:1 ,
    },
    tagline:{
        fontSize:20,
        textTransform:"uppercase",
        justifyContent:"center",
        fontFamily:"Montserrat"
    }
})

)

const Header = () => {
    const classes = useStyles()
  return (
    <>
      <Toolbar>
        
        <SideDrawer>
        <IconButton  color="inherit" >
             <MenuIcon />
        </IconButton>
        </SideDrawer>
        
        <Typography variant="h6" className={classes.title}>Blogging Website</Typography>
        <IconButton color="inherit" >
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton  color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
          <Toolbar className={classes.tagline}>
              Express Your Emotions Through Words
          </Toolbar>
      
    </>
  );
};

export default Header;
