import { Colors } from '../constants/Colors';
import { Forums } from '../pages/Forums';
import { NavigationContainer } from "@react-navigation/native";
import { NewPost } from "../pages/NewPost";
import { Posts } from "../pages/Posts";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const AppNavigator = ({setInput, onAdd, list, onHandleModal, modal, setModal, onHandleDelete, itemSelected}) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Posts" screenOptions={{
        headerStyle: {
          backroundcolor: Colors.primary,
        },
        headerTintColor: Colors.primary,
        headerTitleStyle: {
          fontWeight: "bold",
        }
      }}>
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="NewPost" component={NewPost} />
        <Stack.Screen name="Forums" component={Forums} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
