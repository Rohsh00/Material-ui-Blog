import {
  Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, makeStyles, Typography
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme)=>({
  card: {
    display: "flex",
    backgroundColor:"#4a5859",
   
  },
  cardDetails: {
    flex: 1,
    
  },
  cardMedia: {
    width: 160,
  },
}));

const PostCard = ({ post }) => {
  const classes = useStyles();
  return (
    <>
      <Grid xs={12} md={6} item>
        <CardActionArea component="a" className={classes.margin}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.date}
                </Typography>
                <Typography variant="h5" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                  Continue Reading...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={post.image}
                title={post.imageTile}
              ></CardMedia>
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
};

export default PostCard;
