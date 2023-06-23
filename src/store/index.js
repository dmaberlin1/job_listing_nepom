import {createStore} from 'redux'
import {rootReducer} from "./root-reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig={
    key:"root",
    storage,
    // whitelist:['filters','positions'],
    blacklist:['positions']
}

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=createStore(persistedReducer);
export const persistor=persistStore(store);