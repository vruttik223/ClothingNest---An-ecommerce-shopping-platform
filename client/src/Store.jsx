import {createStore} from 'redux'
import Mainreducers from './Redux/Mainreduers'
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistconfig={

    key:"persist-store",
    storage
}
const persistedReducer=persistReducer(persistconfig,Mainreducers)
const Store = createStore(persistedReducer)
export const persistor=persistStore(Store)
export default Store