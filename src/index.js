import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { store, persistor } from 'redux/store';
import './index.css';
import { GoogleOAuthProvider } from '@moeindana/google-oauth';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GoogleOAuthProvider clientId="559160432182-9k698ebgqm42slah7tsvqrl3qfv0pdr8.apps.googleusercontent.com">
                    <BrowserRouter basename="/Kapusta/">
                        <App />
                    </BrowserRouter>
                </GoogleOAuthProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
