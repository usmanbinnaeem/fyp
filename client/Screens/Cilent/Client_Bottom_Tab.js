import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import HomeScreen from "./Client_Home_Screen";
import NotificationScreen from "./Client_Notification_Screen";
import ProfileScreen from "./Client_Profile_Screen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Client_Bottom_Tab = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName={"Home"}>
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <Icon name="notification" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Client_Bottom_Tab;
