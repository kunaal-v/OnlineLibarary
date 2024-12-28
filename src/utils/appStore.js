import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./BooksSlice"
const  appStore = configureStore({
    reducer:{
        books:booksReducer,
    }
});
export default appStore;


