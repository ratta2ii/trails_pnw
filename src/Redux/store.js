import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Components/features/counter/counterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
