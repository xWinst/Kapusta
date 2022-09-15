// import { configureStore } from '@reduxjs/toolkit';
// import something from './reducers';

// const store = configureStore({
//   reducer: something,
// });

// export default store;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import financeSlice from './financeSlice';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['refreshToken', 'sid'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, financeSlice),
        finance: financeSlice,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
