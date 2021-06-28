import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FaceBook from "../screens/FaceBook";
import Instagram from "../screens/Instagram";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="FACEBOOK" component={FaceBook} />
          <Tab.Screen name="INSTAGRAM" component={Instagram} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
