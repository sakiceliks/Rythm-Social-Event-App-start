import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import EventScreen from "../screens/EventScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Entypo, FontAwesome, Foundation } from "@expo/vector-icons";
import { View } from "react-native";
import MessageScreen from "../screens/MessageScreen";
import AddEventScreen from "../screens/AddEventScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator  labeled={false}
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,

}
}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#08D9D6",
        tabBarInactiveTintColor: "#ffffff",
        tabBarStyle: {
          backgroundColor: "#252A34",
          height:"8%",
          borderTopLeftRadius:20,
          borderTopRightRadius:20,

        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Varlıklarım"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Foundation name="magnifying-glass" size={focused ? 35 : 30} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="AddEventScreen"
        component={AddEventScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="plus-box" size={focused ? 55 : 50} color={color} />
//             <View style={{backgroundColor:'#12141A',width:55,height:55,borderRadius:55,alignItems: 'center', justifyContent: 'center',}}>
//  <Foundation  name="plus" size={focused ? 45 : 40} color={color} />
//             </View>
           
          ),
          
        }}
      />
      <Tab.Screen
        name="Favoriler"
        component={EventScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="calendar" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="user" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
