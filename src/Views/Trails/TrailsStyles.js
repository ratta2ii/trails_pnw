import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1150,
        margin: '150px auto',
        backgroundColor: '#225a27b8',
        outline: '1px solid rgba(0, 30, 3, 0.68)',
        padding: 35,
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