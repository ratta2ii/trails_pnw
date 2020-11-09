import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './HomeStyles';
import UserLocation from './../../Components/UserLocation/UserLocation';


const Home = () => {
    

    //* This activates geolocation in order to get coordinates of a user. These coords will be used to find trails around the user
    // UserLocation();
    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Box className={classes.headerContainer}>
                <Typography variant="h3" 
                    style={{
                        fontFamily: 'Raleway',
                        color: '#ffd251',
                        fontWeight: 400,
                    }}>
                    Welcome to <Typography variant='span' 
                        style={{
                            fontFamily: 'Raleway',
                            color: '#ffd251',
                            textTransform: 'uppercase',
                            fontWeight: 400,
                        }}>
                        PNW Trails 
                    </Typography>
                </Typography>
                <Box>
                    <Button
                        component={Link}
                        to='/trails'
                        variant='contained'
                        color='primary'
                        fontSize='large'
                        className={classes.button}>
                        Find Trails Nearby
                    </Button>
                </Box>
            </Box>
            {/* //! This component does the geolocation (Not sure of this method of doing this) */}
            <UserLocation />
        </Box>
    )
}


export default withRouter(Home);