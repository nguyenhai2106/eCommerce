import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import {useRoute, useNavigation} from '@react-navigation/native';

import product from '../../data/product';

const ProductScreen = () => {
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0] : null,
  );
  const [quantity, setQuantity] = useState(1);

  const route = useRoute();
  console.log(route.params);

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      {/*Image carousel */}
      <ImageCarousel images={product.images} />
      {/* Option selector */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedSize}
          onValueChange={(itemValue, itemIndex) => setSelectedSize(itemValue)}>
          {product.sizes.map(size => (
            <Picker.Item
              label={
                size.weight.toString() +
                'KG - ' +
                (
                  size.price *
                  (1 - (product.discount ? product.discount : 0))
                ).toString() +
                'đ'
              }
              value={size.weight}
              key={size.price}
            />
          ))}
        </Picker>
      </View>
      {/* Price */}
      <Text style={styles.price}>
        chỉ từ{' '}
        {product.sizes[0].price *
          (1 - (product.discount ? product.discount : 0))}
        đ đến{' '}
        {product.sizes[product.sizes.length - 1].price *
          (1 - (product.discount ? product.discount : 0))}
        đ&ensp;
        {product.discount && (
          <Text style={styles.oldPrice}>
            từ {product.sizes[0].price}đ đến{' '}
            {product.sizes[product.sizes.length - 1].price}đ
          </Text>
        )}
      </Text>
      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>
      {/* Quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/* Button */}
      <Button
        text={'Add To Cart'}
        onPress={() => {
          console.warn('Add To Card');
        }}
        containerStyles={{
          backgroundColor: '#ffa41c',
        }}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy Now');
        }}
        containerStyles={{
          backgroundColor: 'rgb(255, 57, 69)',
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;
