import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/Store.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
// this is redux store ho hya ya  set up hai 
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>  
  
   < PersistGate persistor={persistStore(store)} >
     <App />
   
   </PersistGate>
  </Provider>

  </StrictMode>,
)
