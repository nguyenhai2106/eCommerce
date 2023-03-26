import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

interface size {
  weight: number;
  price: number;
}

interface ProductItemProps {
  item: {
    _id: object;
    name: string;
    images: string[];
    avgRating: number;
    ratings: number;
    categories?: string[];
    sizes?: size[];
    discount?: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Product Details' as never, {id: item._id});
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: item.images[0],
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
        <View style={styles.categories}>
          {item.categories &&
            item.categories.map(category => <Text>{category}&nbsp;</Text>)}
        </View>
        <Text style={styles.price}>
          chỉ từ{' '}
          {item.sizes[0].price * (1 - (item.discount ? item.discount : 0))}đ đến{' '}
          {item.sizes[item.sizes.length - 1].price *
            (1 - (item.discount ? item.discount : 0))}
          đ&ensp;
          {item.discount && (
            <Text style={styles.oldPrice}>
              từ {item.sizes[0].price}đ đến{' '}
              {item.sizes[item.sizes.length - 1].price}đ
            </Text>
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
    fontSize: 16,
    fontWeight: '400',
    color: '#007084',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    color: '#007084',
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 6,
  },
});
