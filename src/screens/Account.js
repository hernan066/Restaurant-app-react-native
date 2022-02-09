import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import UserGuest from "./Account/UserGuest";
import UserLogged from "./Account/UserLogged";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Account = () => {
  const [login, setLogin] = useState(null);

  //console.log([login, 'Estado de login']);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        //const uid = user.uid;
        setLogin(false);
      } else {
        // User is signed out
        setLogin(true);
      }
    });
  }, []);

  if (login === null) return <Loading isVisible={true} text="Cargando..." />;

  return login ? <UserLogged /> : <UserGuest />;
};

export default Account;
