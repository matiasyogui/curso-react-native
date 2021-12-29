import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", pw: "" });

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential);
        setForm({ email: "", password: "" });
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text) => setForm({ ...form, email: text })}
        value={form.email}
        blurOnSubmit={true}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setForm({ ...form, password: text })}
        value={form.password}
        style={styles.input}
      />

      {error !== "" && <Text>{error}</Text>}

      <Button onPress={handleLogin} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginVertical: "5%",
    width: "80%",
    height: "6%",
    borderBottomColor: "black",
    borderBottomWidth: 5,
  },
});
