import { Button, Text, TextInput, View } from "react-native";
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
    <View>
      <TextInput
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text) => setForm({ ...form, email: text })}
        value={form.email}
        blurOnSubmit={true}
      />
      <TextInput
        placeholder="Username"
        onChangeText={(text) => setForm({ ...form, username: text })}
        value={form.username}
        blurOnSubmit={true}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setForm({ ...form, password: text })}
        value={form.password}
      />
      {error !== "" && <Text>{error}</Text>}
      <Button onPress={handleRegister} title="Register" />
    </View>
  );
};
