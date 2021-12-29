import { Button, Text, TextInput, View } from "react-native";
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
    <View>
      <TextInput
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text) => setForm({ ...form, email: text })}
        value={form.email}
        blurOnSubmit={true}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setForm({ ...form, password: text })}
        value={form.password}
      />

      {error !== "" && <Text>{error}</Text>}

      <Button onPress={handleLogin} title="Login" />
    </View>
  );
};
