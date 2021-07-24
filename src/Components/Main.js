import { Divider, Grid, Typography } from '@material-ui/core'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { posts } from '../data/Data'


const Main = ({title}) => {
    return (
        <Grid item md={8} xs={12}>
       <Typography varient="h6" gutterBottom>
{title}

       </Typography>
       <Divider />
       {posts.map((post)=>(
           <Markdown key={post.body}>{post.body}</Markdown>
       ))}
        </Grid>
   )
}

export default Main
