import {
  Button,
  KeyboardAvoidingViewBase,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import { Colors } from "../constants/Colors";

export const Login = () => {
  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");

  return (
    <KeyboardAvoidingViewBase behavior="height" style={styles.screen}>
      <View>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput placeholder="Usuario" style={styles.prompt} />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.prompt}
        />

        <Button title="INICIAR SESION" style={styles.boton} />
      </View>
    </KeyboardAvoidingViewBase>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "PoppinsBold",
    marginBottom: 18,
    textAlign: "center",
  },
  container: {
    width: "80%",
    padding: 12,
    margin: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  prompt: {
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    marginVertical: 20,
  },
});
