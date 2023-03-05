import { useState } from "react";
import NoteContext from "./context";

const ContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
  };
  const logouthandler = () => {
    setToken(null);
  };
  const dataContext = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logouthandler,
  };
  return (
    <>
      <NoteContext.Provider value={dataContext}>
        {props.children}
      </NoteContext.Provider>
      ;
    </>
  );
};
export default ContextProvider;
