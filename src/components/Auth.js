import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions/authActions";

const Auth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{isAuthenticated ? `Welcome, ${user.name}` : "Please log in"}</h1>
      {isAuthenticated ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button
          onClick={() =>
            dispatch(login({ name: "Kalpit", email: "kalpit@example.com" }))
          }
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Auth;
