import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import Toast from "react-native-easy-toast";
import { getAuth, signOut } from "firebase/auth";

import Loading from "../../components/Loading";
import InfoUser from "../../components/Account/InfoUser";
//import InfoUser from "../../components/Account/InfoUser";
//import AccountOptions from "../../components/Account/AccountOptions";

export default function UserLogged() {
  
  const toastRef = useRef();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [realoadUserInfo, setRealoadUserInfo] = useState(false);
  
  
  useEffect(() => {
    (async ()=>{
      const auth = getAuth();
      const user = await auth.currentUser;
      setUserInfo(user);
      //console.log(user);
    })()
  }, []);
  
  
  
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sesion cerrada");
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.viewUserInfo}>
      
      {userInfo && <InfoUser userInfo={userInfo} toastRef={toastRef}/>}
      
      
      <Text>AccountOptions...</Text>
      <Button
        title="Cerrar sesion"
        buttonStyle={styles.btnCloseSession}
        titleStyle={styles.btnCloseSessionText}
        onPress={() => handleLogout()}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading text={loadingText} isVisible={loading}/>
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
  btnCloseSession: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnCloseSessionText: {
    color: "#00a680",
  },
});
