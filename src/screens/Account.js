import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import UserGuest from "./Account/UserGuest";
import UserLogged from "./Account/UserLogged";
import { getAuth } from "firebase/auth";

const Account = () => {
  const [login, setLogin] = useState(null);

  //console.log([login, 'Estado de login']);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
    !user ? setLogin(false) : setLogin(true);
  }, []);

  if (login === null) return <Loading isVisible={true} text="Cargando..." />;

  return login ? <UserLogged /> : <UserGuest />;
};

export default Account;
