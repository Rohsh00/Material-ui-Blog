import {
  Container,
  createTheme, Grid,
  makeStyles, ThemeProvider
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React from "react";
import "./App.css";
import FeaturedPost from "./Components/FeaturedPost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import PostCard from "./Components/PostCard";
import Sidebar from "./Components/Sidebar";
import { featuredPosts, sidebar } from "./data/Data";
const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: theme.spacing(3),
  },
  mainGrid:{
    marginTop:12
  }
}));
const App = () => {
  const classes = useStyles();
  const darktheme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={darktheme}>
        <Container>
          <Header />
          <FeaturedPost />
          <br />
          <Grid container>
            {featuredPosts.map((post) => (
              <PostCard post={post} key={post.title} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the FireHose" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </Container>
        <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
         />


      </ThemeProvider>
    </>
  );
};

export default App;
