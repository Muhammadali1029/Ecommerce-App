/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ProductNav from '../navigators/productNav.js';
import SearchScreen from '../screens/searchScreen.js';
import MenuScreen from '../screens/menuScreen.js';
import BasketScreen from '../screens/basketScreen.js';
import AccountScreen from '../screens/accountScreen.js';


const HomeTab = createBottomTabNavigator();

export default class ProductsScreenTab extends Component
{
  render()
  {
    return (
      <NavigationContainer>
        <HomeTab.Navigator
          screenOptions={{
            headerShown: false,
            initialRouteName: 'home',
          }}
        >
          <HomeTab.Screen name="home" accessibilityLabel="Home Screen" component={ProductNav} />
          <HomeTab.Screen name="search" accessibilityLabel="Search Screen" component={SearchScreen} />
          <HomeTab.Screen name="menu" accessibilityLabel="Menu Screen" component={MenuScreen} />
          <HomeTab.Screen name="basket" accessibilityLabel="Basket Screen" component={BasketScreen} />
          <HomeTab.Screen name="account" accessibilityLabel="Account Screen" component={AccountScreen} />
        </HomeTab.Navigator>
      </NavigationContainer>
    );
  }
}
