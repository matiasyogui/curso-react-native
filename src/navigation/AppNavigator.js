import { Colors } from "../constants/Colors";
import { Forums } from "../pages/Forums";
import { ListOfForums } from "../pages/ListOfForums";
import { NavigationContainer } from "@react-navigation/native";
import { NewPost } from "../pages/NewPost";
import { Posts } from "../pages/Posts";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Posts"
        screenOptions={{
          headerStyle: {
            backroundcolor: Colors.primary,
          },
          headerTintColor: Colors.primary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="NewPost" component={NewPost} />
        <Stack.Screen name="ListOfForums" component={ListOfForums} />
        <Stack.Screen
          name="Forums"
          component={Forums}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
