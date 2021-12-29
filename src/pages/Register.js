import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";

import React from "react";
import { auth } from "../firebase/config";
import { useState } from "react";

export const Register = () => {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [error, setError] = useState("");

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: form.username,
        })
          .then((response) => console.log(response))
          .catch((error) => setError(error))
          .finally(() => {
            alert("User created");
            setForm({ email: "", username: "", password: "" });
            setError("");
          });
      })
      .catch((error) => {
        console.log(error);
        setError({ error });
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
        placeholder="Username"
        onChangeText={(text) => setForm({ ...form, username: text })}
        value={form.username}
        style={styles.input}
        blurOnSubmit={true}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setForm({ ...form, password: text })}
        style={styles.input}
        value={form.password}
      />
      {error !== "" && <Text>{error}</Text>}
      <Button onPress={handleRegister} title="Register" />
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
