import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/UserMenu/App';
import { store, persistor } from 'redux/store';
import { GoogleOAuthProvider } from '@moeindana/google-oauth';
import './index.css';

console.log('process.env: ', process.env);
console.log('process.env.REACT_APP_CLIENT_ID: ', process.env.REACT_APP_CLIENT_ID);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </GoogleOAuthProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
