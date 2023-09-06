import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { AppProvider } from "./context"
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-fktvujwg82rjhuxl.us.auth0.com"
    clientId="JF0fOhDLVvkqpW8TKKIBnn701zQkxehF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);