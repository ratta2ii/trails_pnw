import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './TrailsStyles';
import Trail from './../../Components/Trail/Trail';
import { getUserLatitude, getUserLongitude } from '../../Redux/userLocationSlice';


const Trails = (props) => {

    const classes = useStyles();
    const long = useSelector(getUserLongitude);
    const lat = useSelector(getUserLatitude);
    console.log(long, lat);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    let trails = {};


    const [ showModal, setShowModal ] = useState(false);
    const [ modalImage, setModalImage ] = useState(null);
    //* This is drilled down to the Trail component
    const handleOpenModal = (trailImage) => {
        console.log("Trail Image: ", trailImage);
        setModalImage(trailImage);
        setShowModal(true);
    }


    useEffect(() => {
        fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxResults=2&maxDistance=10&key=200647098-0a0b56802af2813b7718381cda690066`)
            .then(res => res.json())
            .then(results => {
                setIsLoaded(true);
                setItems(results.trails);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                });
    }, []);


    if (error) {
        return <div>Error: {error.message}</div>
    }
    else if (!isLoaded) {
        return <div>...still loading</div>
    }


    else {
        return (
            <Box className={classes.root} >
                <Grid container >
                    {items.map(item => {
                        // mapping all the trails in hash table accessible by their ID
                        trails[item.id] = item;
                        console.log(trails);
                        return (
                            <Grid item xs={12} >
                                <Trail
                                    handleOpenModal={handleOpenModal}
                                    key={item.key}
                                    trailId={item.id}
                                    location={item.location}
                                    name={item.name}
                                    trailImage={item.imgMedium}
                                    summary={item.summary}
                                    trailLength={item.length}
                                    stars={item.stars}
                                    ascent={item.ascent}
                                    descent={item.descent}
                                    high={item.high}
                                    low={item.low}
                                    longitude={item.longitude}
                                    latitude={item.latitude}
                                    conditionStatus={item.conditionStatus}
                                    conditionDetails={item.conditionDetails}
                                    conditionDate={item.conditionDate}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
                          {/* Modal to show image */}
            <Box
                style={{
                    display: (!showModal) ? 'none' : 'flex',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                }}>
                    <img src={modalImage} alt="trail modal popup" />
                    <Box 
                        onClick={() => setShowModal(false)}
                        style={{
                            position: 'fixed',
                            top: 50,
                            right: 80,
                            color: 'white',
                            fontSize: 35,
                            cursor: 'pointer',
                    }}>
                        X
                    </Box>
            </Box>  
            </Box>
        );
    }
}

export default Trails;