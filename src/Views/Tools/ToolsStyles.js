import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        backgroundColor: 'cornflowerblue',
        padding: 100,
        marginTop: 200,
        textAlign: 'center',
        [theme.breakpoints.down('lg')]: {

        },
        [theme.breakpoints.down('md')]: {

        },
        [theme.breakpoints.down('sm')]: {
    
        },
        [theme.breakpoints.down('xs')]: {

        },
    },
}));


export default useStyles;