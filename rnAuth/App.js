import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/login';
import Signup from './components/signup';
import TaskList from './components/task-list';

const App = () => {
  return(
    <Router>
      <Scene key="auth">
        <Scene key="login" component={Login} />
        <Scene key="signup" component={Signup} />
      </Scene>

      <Scene key="main">
        <Scene key="tasks" component={TaskList}/>
      </Scene>
    </Router>
  );
}

export default App;