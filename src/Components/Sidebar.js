import { Grid, Link, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme)=>({
    SidebarAboutBox:{
        padding:theme.spacing(2)

    },
    SidebarSection:{
        marginTop:theme.spacing(3)
        
    }
}));

const Sidebar = ({ archives, description, social, title }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} md={4}>
        <Paper elevatio={0} className={classes.SidebarAboutBox}>
          <Typography variant="h6" gutterBottom >
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.SidebarSection}
        >
          Archives
        </Typography>
        {archives.map((archive) => (
          <Link
            display="block"
            variant="body1"
            href={archive.url}
            key={archive.title}
          >
            {archive.title}
          </Link>
        ))}
        <Typography
          variant="h6"
          gutterBottom
          className={classes.SidebarSection}
        >
          Social
        </Typography>
        {social.map((network) => (
          <Link display="block" variant="body1" href="#" key={network.name} >
              <Grid container display="row" spacing={1} alignItems="center"> 
                  <Grid item>
                      <network.icon />
                  </Grid>
                  <Grid item>{network.name} </Grid>
              </Grid>
          </Link>

        ))}
      </Grid>
    </>
  );
};

export default Sidebar;
