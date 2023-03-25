import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="HomeScreen"
        component={ShoppingCartScreen}
        options={{title: 'Shopping Cart', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Delivery Address"
        component={AddressScreen}
        options={{
          title: 'Delivery Address',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
