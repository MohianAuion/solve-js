import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  reload,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Update Profile
  const updateUser = async (name, photo) => {
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });

    await reload(auth.currentUser);

    setUser({ ...auth.currentUser });
  };

  // Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Reset Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Observe User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleLogin,
    updateUser,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;