/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductsScreen from '../screens/productsScreen.js';
import ProductDetailScreen from '../screens/productDetailScreen.js';

const ProductStack = createNativeStackNavigator();

export default class ProductsScreenStack extends Component
{
  render()
  {
    return (
      <ProductStack.Navigator
        screenOptions={{
          headerShown: false,
          initialRouteName: 'productsScreen',
        }}
      >
        <ProductStack.Screen name="productsScreen" accessibilityLabel="All Products Screen" component={ProductsScreen} />
        <ProductStack.Screen name="productDetailScreen" accessibilityLabel="Product Detail Screen" component={ProductDetailScreen} />
      </ProductStack.Navigator>
    );
  }
}
