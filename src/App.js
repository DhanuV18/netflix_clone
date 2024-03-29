import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomeScreen from './components/HomeScreen';
// import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen';

// import { auth } from "./firebase";
// import { useDispatch, useSelector } from 'react-redux'
// import { login, logout, selectUser } from './features/userSlice'

function App() {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {        
  //       dispatch(login({
  //         uid: userAuth.uid,
  //         email: userAuth.email
  //       })
  //     );
  //     }
  //     else {
  //       dispatch(logout());
  //     }
  //   });

  //   return unsubscribe
  // }, [dispatch])
    
  return (
    <div className="App">
      
      <Router>
          {
            // !user ? (
            //    <LoginScreen />
            // ) : (
              <Routes> 
                  {/* <Route path='/profile' element={<ProfileScreen />} />                         */}
                  <Route path='/' element={<HomeScreen />} />
              </Routes>      
            // )
          }
    
      </Router>
      
    </div>
  );
}

export default App;
