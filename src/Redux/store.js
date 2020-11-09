import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Components/features/counter/counterSlice';
import userLocationReducer from './userLocationSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        userLocation: userLocationReducer,
    },
});
