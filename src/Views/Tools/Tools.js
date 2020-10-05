import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './ToolsStyles';


const Tools = (props) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.headerContainer}>
                <Typography variant='h3'>
                    Made it into tools!
                </Typography>
            </Box>
        </Box>
    )
}

export default Tools;