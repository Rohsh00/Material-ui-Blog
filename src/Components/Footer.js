import { Container, makeStyles, Typography, Link } from '@material-ui/core'

import React from 'react'

const useStyles= makeStyles((theme)=>({
footer:{
    backgroundColor:theme.palette.background.paper,
    marginTop:theme.spacing(4),
    padding:theme.spacing(6,0)
}

}));


const Footer = ({description, title}) => {
    const classes = useStyles()
  
    return (
        <>
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom color="error">{title}</Typography>
            </Container>
            <Typography component="p" variant="subtitle1" align="center" color="secondary">
{description}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">Copyright © {" "}
            <Link color="inherit" href="https://www.material-ui.com">Material-ui.com</Link>{" "}
            {new Date().getFullYear()}
            </Typography>
        </footer>
            
        </>
    )
}

export default Footer
