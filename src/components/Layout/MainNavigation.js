import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NoteContext from "../../store/context";
import { useContext} from "react";

const MainNavigation = () => {
  const AuthContext = useContext(NoteContext);
  const isLoggedIn=AuthContext.isLoggedIn
  const LogOutHandler=()=>{
    AuthContext.logout()
  }
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
      
        <ul>
        {!isLoggedIn &&( <li> <Link to="/auth">Login</Link></li>)}
         
          {isLoggedIn &&(<li> <Link to="/profile">Profile</Link></li>)}
          {isLoggedIn && <li> <button onClick={LogOutHandler}>Logout</button></li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
