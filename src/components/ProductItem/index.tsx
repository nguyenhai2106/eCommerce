import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

interface ProductItemProps {
  item: {
    _id: object;
    name: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
    categories?: string[];
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    let id: object = item._id;
    navigation.navigate('Product Details' as never, id as never);
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.name}
        </Text>
        {/*Ratings */}
        <View style={styles.ratingsContainer}>
          {new Array(5).fill(0).map((element, index) => {
            if (index < Math.floor(item.avgRating)) {
              return (
                <FontAweSome
                  key={`${item._id}-${index}`}
                  style={styles.star}
                  name="star"
                  size={18}
                  color={'#e47911'}
                />
              );
            } else if (
              index >= Math.floor(item.avgRating) &&
              index < item.avgRating
            ) {
              return (
                <FontAweSome
                  key={`${item._id}-${index}`}
                  style={styles.star}
                  name="star-half-empty"
                  size={18}
                  color={'#e47911'}
                />
              );
            } else {
              return (
                <FontAweSome
                  key={`${item._id}-${index}`}
                  style={styles.star}
                  name="star-o"
                  size={18}
                  color={'#e47911'}
                />
              );
            }
          })}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 4,
    overflow: 'hidden',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
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
    marginVertical: 4,
  },
  star: {
    margin: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
});
