import { useState, useEffect, createContext, useContext } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const FirebaseContext = createContext();

const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  const config = {
    apiKey: 'AIzaSyAogTSQ1qAxh_KPmq98WiQjLh2JrJJ27tI',
    authDomain: 'instagram-1c436.firebaseapp.com',
    projectId: 'instagram-1c436',
    storageBucket: 'instagram-1c436.appspot.com',
    messagingSenderId: '874582835756',
    appId: '1:874582835756:web:3e20854b35b13f363f4789',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const { FieldValue } = firebase.firestore;

  return (
    <FirebaseContext.Provider value={{ firebase, FieldValue, user }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { useFirebase, FirebaseProvider };
