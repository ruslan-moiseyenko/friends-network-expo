import { CreatePostScreen } from "@Screens/CreatePostScreen";
import { HomeScreen } from "@Screens/HomeScreen";
import { ProfileScreen } from "@Screens/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UpdateProfileScreen from '@Screens/UpdateProfileScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={ HomeScreen }
          options={ ({ navigation }) => ({
            headerRight: () => (
              <FontAwesome
                onPress={ () => navigation.navigate("Profile") }
                name="user"
                size={ 24 }
                color="gray"
              />
            ),
            title: "Feed",
          }) }
        />
        <Stack.Screen
          name="CreatePost"
          component={ CreatePostScreen }
          options={ { title: "Create Post" } }
        />
        <Stack.Screen
          name="Profile"
          component={ ProfileScreen }
          options={ { title: "Create Post" } }
        />
        <Stack.Screen name="Update Profile" component={ UpdateProfileScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
