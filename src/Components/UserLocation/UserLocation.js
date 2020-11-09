import { useDispatch } from 'react-redux';
import { setUserLocation } from '../../Redux/userLocationSlice';


const UserLocation = () => {


    const dispatch = useDispatch();


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }


    function showPosition(position) {
        console.log("Lat", position.coords.latitude, "Long: ", position.coords.longitude);
        dispatch(setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        }));
    }


    return null;
}

export default UserLocation;