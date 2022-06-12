import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contacts-slice';
import userReducer from './users/users-slice';

const userPersistConfig = {
    key: "user",
    storage,
    whitelist: ["token"]
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        user: persistedUserReducer
    }
});

export const persistor = persistStore(store);