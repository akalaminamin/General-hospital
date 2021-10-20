import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  const  name = auth?.currentUser?.displayName;
  return (
    <Route
      {...rest}
      render={({ location }) =>
      name ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
