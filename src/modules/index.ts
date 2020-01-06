import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import auth from './auth';



const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    // auth: persistReducer(persistConfig, auth),
    auth
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(rootReducer);
    // const persistor = persistStore(store);
    return { store };
};