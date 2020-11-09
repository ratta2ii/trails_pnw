import { createSlice } from '@reduxjs/toolkit';


export const userLocationSlice = createSlice({
    name: 'userLocation',
    initialState: {
        //! These are for CDA (Testing: remove later)
        userLatitude: 47.6735,
        userLongitude: -116.7812,
    },
    reducers: {
        setUserLocation: (state, action) => {
            console.log('payload', action.payload)
            state.userLatitude = action.payload.latitude;
            state.userLongitude = action.payload.longitude;
        },
    },
});


export const { setUserLocation } = userLocationSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.location.value)`
export const getUserLongitude = state => state.userLocation.userLongitude;
export const getUserLatitude = state => state.userLocation.userLatitude;

export default userLocationSlice.reducer;