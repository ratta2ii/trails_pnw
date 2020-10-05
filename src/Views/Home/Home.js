import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './HomeStyles';


const Home = () => {


    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Box className={classes.headerContainer}>
                <Typography variant="h3">
                    Hello World! You are now Home.
                </Typography>

                <Box>
                    <Link
                        to='/tools'
                        className={classes.toolLink} >
                        Link to tools
                    </Link>
                </Box>

                <Box>
                    <Button
                        component={Link}
                        to='/tools'
                        variant='contained'
                        color='primary'
                        fontSize='x-small'
                        className={classes.button} >
                        Button To Tools
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}


export default withRouter(Home);