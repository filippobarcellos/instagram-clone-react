import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseProvider } from './context/useFirebase';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
