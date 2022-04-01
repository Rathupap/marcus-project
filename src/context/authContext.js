import React, { createContext, useReducer } from "react";

const AuthContext = createContext({
  user: null,
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "LOGIN":
          return {
            ...state,
            user: {
              email: action.payload.email,
            },
          };
        case "LOGOUT":
          return {
            ...state,
            user: null,
          };
        default:
          return state;
      }
    },
    {
      user: null,
    }
  );

  const login = (email) => {
    dispatch({
      type: "LOGIN",
      payload: {
        email,
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const value = {
    user: state.user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
