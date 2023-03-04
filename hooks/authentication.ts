import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { atom, useRecoilState } from "recoil";
import { User } from "../models/User";
import { useEffect } from "react";

const userState = atom<User>({
  key: "user",
  default: null,
});

export function useAuthentication() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (user !== null) {
      return;
    }

    const auth = getAuth();

    signInAnonymously(auth).catch(function (error) {
      console.error(error);
    });

    onAuthStateChanged(auth, function (firebaseUser) {
      if (firebaseUser) {
        console.log("Set user");
        setUser({
          uid: firebaseUser.uid,
          isAnoymous: firebaseUser.isAnonymous,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return { user };
}
