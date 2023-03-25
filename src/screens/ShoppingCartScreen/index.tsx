import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import CartProductItem from '../../components/CartProductItem';
import QuantitySelector from '../../components/QuantitySelector';
import carts from '../../data/cart';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const ShoppingCartScreen = () => {
  const navigation = useNavigation();
  const totalAmount = carts.reduce(
    (sumedAmount, cartItem) =>
      sumedAmount + cartItem.quantity * cartItem.item.price,
    0,
  );
  const onCheckout = () => {
    navigation.navigate('Delivery Address' as never);
  };
  return (
    <View style={styles.page}>
      <FlatList
        data={carts}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.subTotal}>
              Subtotal ({carts.length} items):{' '}
              <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
            </Text>
            <Button text="Process To Checkout" onPress={onCheckout} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  subTotal: {
    marginBottom: 12,
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  totalAmount: {
    fontSize: 16,
    color: 'red',
    fontWeight: '500',
  },
});
export default ShoppingCartScreen;
