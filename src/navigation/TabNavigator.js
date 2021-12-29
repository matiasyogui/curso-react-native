import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "@firebase/auth";

import { Colors } from "../constants/Colors";
import { Forums } from "../pages/Forums";
import { Ionicons } from "@expo/vector-icons";
import { ListOfForums } from "../pages/ListOfForums";
import { Login } from "../pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { NewPost } from "../pages/NewPost";
import { Posts } from "../pages/Posts";
import { Register } from "../pages/Register";
import { auth } from "../firebase/config";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const TabNavigator = () => {
  const BottomTabs = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();
  const ForumsStack = createNativeStackNavigator();
  const NewPostStack = createNativeStackNavigator();

  const LoginStack = createNativeStackNavigator();
  const RegisterStack = createNativeStackNavigator();

  const [user, setUser] = useState("");

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logout succesful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.id;
        console.log(user);
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

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
          options={{
            title: "REDDIT CLONE",
            headerRight: () => (
              <TouchableOpacity onPress={handleLogout}>
                <Text>Logout</Text>
              </TouchableOpacity>
            ),
            /* headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
              />
            ), */
          }}
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

  function RegisterStackRender() {
    return (
      <RegisterStack.Navigator
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
        <RegisterStack.Screen name="Register" component={Register} />
      </RegisterStack.Navigator>
    );
  }

  function LoginStackRender() {
    return (
      <LoginStack.Navigator
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
        <LoginStack.Screen name="Login" component={Login} />
      </LoginStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          headerTitleAlign: "center",
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
        }}
      >
        {user ? (
          <>
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
              name="NewPostTab"
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
          </>
        ) : (
          <>
            <BottomTabs.Screen
              name="RegisterTab"
              component={RegisterStackRender}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={styles.item}>
                    <Ionicons
                      name={"md-chatbubbles"}
                      size={24}
                      color={focused ? "green" : "black"}
                    />
                    <Text>Register</Text>
                  </View>
                ),
              }}
            />

            <BottomTabs.Screen
              name="LoginTab"
              component={LoginStackRender}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={styles.item}>
                    <Ionicons
                      name={"md-chatbubbles"}
                      size={24}
                      color={focused ? "green" : "black"}
                    />
                    <Text>Login</Text>
                  </View>
                ),
              }}
            />
          </>
        )}
      </BottomTabs.Navigator>
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
  logout: {
    backgroundColor: "blue",
  },
});
