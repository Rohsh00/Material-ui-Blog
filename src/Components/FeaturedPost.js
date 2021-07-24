import React from 'react'
import { Card, CardContent, Typography,Button,  CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles= makeStyles(()=>({
    title:{
        fontSize:40,
        fontFamily:"Montserrat"
    },
    cover:{
        backgroundImage:`url(https://images.unsplash.com/photo-1626969027699-05d7d037a2c6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60)`,
        backgroundPosition:"center",
        padding:"35px 25px"
    }
    

}))

const FeaturedPost = () => {
    const classes = useStyles()
    return (
        <>
           <Card className={classes.cover} >
        <CardContent className={classes.textContainer} >
            <Typography className={classes.title} gutterBottom>Title Of a longer featured Blog Post </Typography>
            <Typography variant="h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed commodi et obcaecati similique, sapiente impedit dolorem ab maxime vel!
            </Typography>
        </CardContent>
        <CardActions>
            <Button className={classes.btn}>
            Read More
            </Button>
        </CardActions>
           </Card> 
        </>
    )
}

export default FeaturedPost
