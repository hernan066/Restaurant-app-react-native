import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import UserGuest from "./Account/UserGuest";
//import * as firebase from "firebase";

const Account = () => {
  
  const [login, setLogin] = useState(null);

  useEffect(() => {
   
  }, []);
  


  
  return (
    <View>
      {/* <Loading text={'Cargando'}/> */}
      <UserGuest />
    </View>
  );
};

export default Account;
