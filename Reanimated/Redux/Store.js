import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./Slice"; // Assuming your slice file is named "Slice.js"

const store = configureStore({
    reducer: {
        products: sliceReducer // Use the slice reducer here
    }
});

export default store;