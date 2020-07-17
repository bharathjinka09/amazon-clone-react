import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function App() {

  const [{ user }, dispatch] = useStateValue();

  // code which runs based on a condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
          // user is logged in

          dispatch({
            type: 'SET_USER',
            user: authUser
          })

       } else {
          // user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
       }
    });

    return () => {
     // cleanup operations like clearing the timer to 0
     unsubscribe();
    }

  }, [])

  console.log("USER IS >>>>",user)


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
