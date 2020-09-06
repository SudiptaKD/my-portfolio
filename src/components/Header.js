import React from 'react';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../avatar.png';

// CSS Styles
const useStyles = makeStyles(theme=>({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color:"tomato"
    },
    subTitle: {
        color: "tan",
        marginBottom: "3rem" 
    },
    typedContainer : {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        textAlign: "center",
        zIndex: 1,
        transform: "translate(-50%, -50%)"
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Sudipta Kumar Dam" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                  <Typed strings={["Sudipta Kumar Dam"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography  className={classes.subTitle} variant="h5">
                  <Typed 
                  strings={["Male 1.75m", "Web Design", "thank you"]}
                   typeSpeed={40}
                   backSpeed={50}
                   loop 
                    />
            </Typography>
        </Box>
    )
}

export default Header
