import { createContext, useContext , useEffect, useState} from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  updateProfile
} from "firebase/auth";
import { auth } from "./utils";
import { GoogleAuthProvider } from "firebase/auth";

const AuthContext = createContext();

export function createUserWithEmailPassword(email, password, displayName) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Update the user's profile with their name
      if (displayName) {
        await updateProfile(userCredential.user, {
          displayName: displayName
        });
      }
      return userCredential.user;
    })
    .catch((error) => {
      console.error("Sign up error:", error);
      throw error;
    });
}

export function createUserWithGoogle() {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider)
    .then((result) => {
      return result.user;
    })
    .catch((error) => {
      console.error("Google sign-in error:", error);
      throw error;
    });
}

export async function validatePassword(password, setError) {
 
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    setError("Password must be at least 8 characters long!");
    return false;
  }
  if (!hasUpperCase) {
    setError("Password must contain an uppercase letter!");
    return false;
  }
  if (!hasLowerCase) {
    setError("Password must contain a lowercase letter!");
    return false;
  }
  if (!hasNumbers) {
    setError("Password must contain a number!");
    return false;
  }
  if (!hasSpecialChar) {
    setError("Password must contain a special character!");
    return false;
  }

  setError(null);
  return true;
}

export function signInUserWithEmailPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      console.error("Sign in error:", error);
      throw error;
    });
}

export function logout() {
  return auth.signOut()
    .then(() => {
      console.log("Signed Out");
      return true;
    })
    .catch((error) => {
      console.error("Sign out error:", error);
      throw error;
    });
}


// A custom hook to consume the context.

const useAuth = () => {
  console.log(AuthContext);
  return useContext(AuthContext);
};

// provider component that manages and shares the authentication state.
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [uid, setid] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isEmailProvider, setIsEmailProvider] = useState(false);
  const [isGoogleProvider, setIsGoogleProvider] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Set up auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setid(user.uid);
        setName(user.displayName || "");
        setEmail(user.email || "");
        setProfileImg(user.photoURL || "");
        setIsLoggedIn(true);
        setIsVerified(user.emailVerified);
        setIsEmailProvider(user.providerData[0].providerId === "password");
        setIsGoogleProvider(user.providerData[0].providerId === "google.com");
      } else {
        setUser(null);
        setid(null);
        setName("");
        setEmail("");
        setProfileImg("");
        setIsLoggedIn(false);
        setIsVerified(false);
        setIsEmailProvider(false);
        setIsGoogleProvider(false);
      }
      setIsLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // handle redirect signin result once on initial render
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log("Redirect sign-in success:", result.user);
        }
      })
      .catch((error) => {
        console.error("Redirect sign-in error:", error);
      });
  }, []);

  const authConfig = {
    user,
    uid,
    name,
    email,
    profileImg,
    isLoggedIn,
    isVerified,
    isEmailProvider,
    isGoogleProvider,
    isLoading,
  };

  return (
    <AuthContext.Provider value={authConfig}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { useAuth };
