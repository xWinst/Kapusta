import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/UserMenu/App';
import { store, persistor } from 'redux/store';
import { GoogleOAuthProvider } from '@moeindana/google-oauth';
import './index.css';

//require('dotenv').config();

// import * as dotenv from 'dotenv';
// dotenv.config()
console.log('env=', process.env.REACT_APP_CLIENT_ID);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
                    {/* <GoogleOAuthProvider clientId="559160432182-9k698ebgqm42slah7tsvqrl3qfv0pdr8.apps.googleusercontent.com"> */}
                    <BrowserRouter basename="/Kapusta/">
                        <App />
                    </BrowserRouter>
                </GoogleOAuthProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
