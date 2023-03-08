import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import  {store ,persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51MiXLdCETjFQW3n5TjwWfcv8DtnjFMbJDcEThggjcRD2lRz8zo04V5gmNbGv6RQdPXGxMSUyLeJoYzvtrV60PfwJ00d9vkyTHa');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}></PersistGate>
    <Elements stripe={stripePromise}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Elements>
    <PersistGate loading={null} persistor={persistor}></PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
