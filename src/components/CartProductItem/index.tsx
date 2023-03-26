import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, item} = cartItem;
  const [quantity, setQuantity] = useState(quantityProp);
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: cartItem.item.image,
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {cartItem.item.title}
          </Text>
          {/*Ratings */}
          <View style={styles.ratingsContainer}>
            {new Array(5).fill(0).map((element, index) => {
              if (index < Math.floor(cartItem.item.avgRating)) {
                return (
                  <FontAweSome
                    key={`${cartItem.item.id}-${index}`}
                    style={styles.star}
                    name="star"
                    size={18}
                    color={'#e47911'}
                  />
                );
              } else if (
                index >= Math.floor(cartItem.item.avgRating) &&
                index < cartItem.item.avgRating
              ) {
                return (
                  <FontAweSome
                    key={`${cartItem.item.id}-${index}`}
                    style={styles.star}
                    name="star-half-empty"
                    size={18}
                    color={'#e47911'}
                  />
                );
              } else {
                return (
                  <FontAweSome
                    key={`${cartItem.item.id}-${index}`}
                    style={styles.star}
                    name="star-o"
                    size={18}
                    color={'#e47911'}
                  />
                );
              }
            })}
            <Text>{cartItem.item.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from ${cartItem.item.price} &nbsp;
            {cartItem.item.oldPrice && (
              <Text style={styles.oldPrice}> ${cartItem.item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    marginVertical: 4,
    borderColor: '#d1d1d1',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },

  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
    marginLeft: 4,
  },
  rightContainer: {
    padding: 8,
    flex: 3,
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    margin: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ff424e',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    color: '#007084',
  },
  quantityContainer: {
    marginTop: 4,
    marginLeft: 24,
  },
});
