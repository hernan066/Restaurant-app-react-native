import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validations";
import { size, isEmpty } from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Loading";

function defaultForm() {
  return {
    email: "",
    password: "",
    rePassword: "",
  };
}

export default function RegisterForm(props) {
  const { toastRef } = props;

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [formData, setFormData] = useState(defaultForm());
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleForm = (e, type) => {
    setFormData({
      ...formData,
      [type]: e,
    });
  };

  const hadleSubmit = () => {
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.rePassword)
    ) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("El email no es correcto");
    } else if (formData.password !== formData.rePassword) {
      toastRef.current.show("Las contraseñas tienen que ser iguales");
    } else if (size(formData.password) < 6) {
      toastRef.current.show(
        "La contraseña tiene que tener al menos 6 caracteres"
      );
    } else {
      setLoading(true);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoading(false);
          navigation.navigate("account");
        })
        .catch(() => {
          toastRef.current.show("El email ya esta en uso, pruebe con otro");
        });
    }
  };
  //console.log(formData);
  return (
    
      <View style={styles.formContainer}>
        <Input
          placeholder="Correo electronico"
          containerStyle={styles.inputForm}
          onChange={(e) => handleForm(e.nativeEvent.text, "email")}
          rightIcon={
            <Icon
              type="material-community"
              name="at"
              iconStyle={styles.iconRight}
            />
          }
        />
        <Input
          placeholder="Contraseña"
          containerStyle={styles.inputForm}
          password={true}
          secureTextEntry={showPass ? false : true}
          onChange={(e) => handleForm(e.nativeEvent.text, "password")}
          rightIcon={
            <Icon
              type="material-community"
              name={showPass ? "eye-outline" : "eye-off-outline"}
              iconStyle={styles.iconRight}
              onPress={() => setShowPass(!showPass)}
            />
          }
        />
        <Input
          placeholder="Repetir contraseña"
          containerStyle={styles.inputForm}
          password={true}
          secureTextEntry={showConfirmPass ? false : true}
          onChange={(e) => handleForm(e.nativeEvent.text, "rePassword")}
          rightIcon={
            <Icon
              type="material-community"
              name={showConfirmPass ? "eye-outline" : "eye-off-outline"}
              iconStyle={styles.iconRight}
              onPress={() => setShowConfirmPass(!showConfirmPass)}
            />
          }
        />

        <Button
          title="Registrarse"
          containerStyle={styles.btnContainerRegister}
          buttonStyle={styles.btnRegister}
          onPress={hadleSubmit}
        />
        <Loading isVisible={loading} text='Creando cuenta' />
      </View>
    
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
