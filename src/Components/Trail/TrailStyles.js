
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
    },
    topCenterGridItem: {
        height: 150,
        [theme.breakpoints.down('lg')]: {

        },
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
    
        },
        [theme.breakpoints.down('xs')]: {

        },
    },
    rightMainGridContainer: {
        backgroundColor: '#fffefc',
        padding: 20,
        height: 230, 
        [theme.breakpoints.down('md')]: {
            height: '100%', 
        },
    },
    rightInfoGridItem: {
        height: 180,
        paddingLeft: 40,
        backgroundColor: '#fffefc',
    },
    trailImage: {
        height: 230,
        width: 230,
        cursor: 'pointer',
    },
    trailTitle: {
        fontSize: '1.6rem',
        color: 'brown',
        fontFamily: 'Raleway',
    },
    infoValue: {
        marginLeft: 7,
        color: '#2d2d2d',
        fontSize: '.9rem',
        fontFamily: 'Raleway',
        paddingBottom: 3,
    },
    title: {
        fontSize: '.7rem',
        color: '#766535',
        fontFamily: 'Raleway',
    },
    infoBox: {
        padding: '2px 0',
        display: 'flex',
        alignItems: 'center',
    },
    buttonGroup: {
        
    }
}));


export default useStyles;










// const useStyles = makeStyles((theme) => ({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//         transform: 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
//     expandOpen: {
//         transform: 'rotate(180deg)',
//     },
//     avatar: {
//         backgroundColor: red[500],
//     },
    // infoValue: {
    //     marginLeft: 7,
    //     color: '#414141',
    // },
    // title: {
    //     fontSize: '.8rem',
    //     color: '#766535',
    // },
    // infoBox: {
    //     padding: '5px 0',
    //     display: 'flex',
    //     alignItems: 'center',
    // }
// }));


// export default useStyles;











