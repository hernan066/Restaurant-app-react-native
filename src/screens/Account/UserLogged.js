import { View, Text, Button } from 'react-native';
import React from 'react';
import { getAuth, signOut } from "firebase/auth";

const UserLogged = () => {
  
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth);
  };
  
  return (
    <View>
      <Text>UserLogged</Text>
      <Button title="Logout" onPress={() => handleLogout()} />
    </View>
  );
};

export default UserLogged;
