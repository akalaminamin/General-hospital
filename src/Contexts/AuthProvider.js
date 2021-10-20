import "../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {useHistory, useLocation} from "react-router-dom";
import React, { createContext, useContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loading, setLoding] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoding(false);
    });
    return unsubscribe;
  }, []);

  // handle sign in with google
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setCurrentUser(result.user)
        history.push(redirect_uri);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //   handle sign up using email and password
  const signUp = async (email, password, username) => {
    await createUserWithEmailAndPassword(auth, email, password);
    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  };
  //   handle login function
  const LogIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   handle log out function
  const logOut = async () => {
    return signOut(auth);
  };
  const value = {
    currentUser,
    handleGoogleSignIn,
    signUp,
    LogIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
