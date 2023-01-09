import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import ConfigAPIURL from "../config/ConfigAPIURL";
import APIRequest from "../utils/APIRequest";
import isEmpty from "../utils/isEmpty";

export let AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    initializeAuth();
  }, []);
  const initializeAuth = async () => {
    const response = await APIRequest.request(
      "GET",
      ConfigAPIURL.sessionValidation,
      ""
    );

    setAuthenticated(
      !isEmpty(response) &&
        response.code === 100 &&
        response.data.responseCode === 109
    );
    if (
      !isEmpty(response) &&
      response.code === 100 &&
      response.data.responseCode === 109
    ) {
      setUser(response.data.user);
      dispatch({
        type: "UPDATE_USER",
        value: response.data.user,
      });
    } else {
      setUser(null);
      dispatch({
        type: "UPDATE_USER",
        value: null,
      });
    }
    setLoading(false);
  };

  const value = { user, isLoading, isAuthenticated };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export function RequireNoAuth({ children }) {
  const user = useSelector((store) => store.user);
  let location = useLocation();

  if (user !== null) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" replace />;
  }

  return children;
}
