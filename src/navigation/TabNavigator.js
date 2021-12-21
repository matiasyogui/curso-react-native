import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants/Colors";
import { Forums } from "../pages/Forums";
import { Ionicons } from "@expo/vector-icons";
import { ListOfForums } from "../pages/ListOfForums";
import { NavigationContainer } from "@react-navigation/native";
import { NewPost } from "../pages/NewPost";
import { Posts } from "../pages/Posts";
import React from "react";
import { Register } from "../pages/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const TabNavigator = () => {
  const user = true;

  const BottomTabs = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();
  const ForumsStack = createNativeStackNavigator();
  const NewPostStack = createNativeStackNavigator();
  const AuthStack = createNativeStackNavigator();

  function AuthStackRender() {
    return (
      <AuthStack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        <AuthStack.Screen name={"Register"} component={Register} />
      </AuthStack.Navigator>
    );
  }

  function HomeStackRender() {
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <HomeStack.Screen
          name="Posts"
          component={Posts}
          options={{ title: "REDDIT CLONE" }}
        />
      </HomeStack.Navigator>
    );
  }

  function NewPostStackRender() {
    return (
      <NewPostStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <NewPostStack.Screen name="NewPost" component={NewPost} />
      </NewPostStack.Navigator>
    );
  }

  function ForumsStackRender() {
    return (
      <ForumsStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <ForumsStack.Screen name="ListOfForums" component={ListOfForums} />
        <ForumsStack.Screen
          name="Forums"
          component={Forums}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </ForumsStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        <BottomTabs.Navigator
          initialRouteName="HomeTab"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
          }}
        >
          <BottomTabs.Screen
            name="HomeTab"
            component={HomeStackRender}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.item}>
                  <Ionicons
                    name={"md-home"}
                    size={24}
                    color={focused ? "green" : "black"}
                  />
                  <Text>Home</Text>
                </View>
              ),
            }}
          />

          <BottomTabs.Screen
            name="New Post Tab"
            component={NewPostStackRender}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.item}>
                  <Ionicons
                    name={"md-add-circle-outline"}
                    size={24}
                    color={focused ? "green" : "black"}
                  />
                  <Text>New Post</Text>
                </View>
              ),
            }}
          />

          <BottomTabs.Screen
            name="ForumsTab"
            component={ForumsStackRender}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.item}>
                  <Ionicons
                    name={"md-chatbubbles"}
                    size={24}
                    color={focused ? "green" : "black"}
                  />
                  <Text>Forums</Text>
                </View>
              ),
            }}
          />
        </BottomTabs.Navigator>
      ) : (
        AuthStackRender()
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#8f6df0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    borderRadius: 15,
    height: "10%",
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
