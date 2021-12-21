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
import { useNavigation } from "@react-navigation/core";

export const Register = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");

  return (
    <KeyboardAvoidingViewBase behavior="height" style={styles.screen}>
      <View>
        <Text style={styles.title}>REGISTER</Text>
        <TextInput
          placeholder="Email"
          style={styles.prompt}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.prompt}
          autoCapitalize="none"
        />

        <Button title="INICIAR SESION" style={styles.button} />
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
