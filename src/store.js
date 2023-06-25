import {configureStore} from "@reduxjs/toolkit";
import {filterReducer} from "./features/filter/filter-slice";
import {positionReducer} from "./features/positions/position-slice";

const store=configureStore({
    reducer:{
        filters:filterReducer,
        positions:positionReducer
    },
    devTools:true,
})