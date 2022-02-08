import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import UserGuest from "./Account/UserGuest";
import UserLogged from "./Account/UserLogged";
import { getAuth } from "firebase/auth";

const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    !user ? setLogin(false) : setLogin(true);
  }, []);

  if (login === null) return <Loading isVisible={true} text="Cargando..." />;

  return login ? <UserLogged /> : <UserGuest />;
};

export default Account;
