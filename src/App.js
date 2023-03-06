import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import NoteContext from './store/context';


function App() {
  const AuthCtx=useContext(NoteContext)
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!AuthCtx.isLoggedIn && <Route path='/auth'>
          <AuthPage />
        </Route> }
        {AuthCtx.isLoggedIn && <Route path='/profile'>
          <UserProfile />
        </Route>}
        <Route path='*'>
        <Redirect to='/'/>

        </Route>
        
      </Switch>
    </Layout>
  );
}

export default App;
