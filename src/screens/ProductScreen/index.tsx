import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import {useRoute, useNavigation} from '@react-navigation/native';
import ActivityIndicatorProduct from '../../components/ActivityIndicator/ActivityIndicator';

interface size {
  weight: number;
  price: number;
}

interface Product {
  _id: string;
  name: string;
  images: string[];
  avgRating: number;
  ratings: number;
  categories?: string[];
  sizes?: size[];
  discount?: number;
}
export const readSinglePage = async (productId: string) => {
  try {
    const response = await fetch(
      `https://backend-service-lm1y.onrender.com/products/id/${productId}`,
      {
        method: 'GET',
      },
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const ProductScreen = () => {
  const [product, setProduct] = useState();
  const [error, setError] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const route = useRoute();
  const loadSingleProduct = (productId: string) => {
    readSinglePage(productId).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
      }
    });
  };

  useEffect(() => {
    const productId = route.params.id;
    loadSingleProduct(productId);
  }, [route.params?.id]);

  if (!product) {
    return <ActivityIndicatorProduct />;
  }

  return (
    <ScrollView style={styles.root}>
      {/*Image carousel */}
      <ImageCarousel images={product.images} />
      {/* Product Title */}
      <Text style={styles.title}>{product.name}</Text>
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
        text={'Thêm Vào Giỏ Hàng'}
        onPress={() => {
          console.warn('Thêm Vào Giỏ Hàng');
        }}
        containerStyles={{
          backgroundColor: '#FFD814',
          borderColor: '#FCD200',
          color: '#0F1111',
          borderRadius: 100,
        }}
      />
      <Button
        text={'Mua Ngay'}
        onPress={() => {
          console.warn('Mua Ngay');
        }}
        containerStyles={{
          backgroundColor: '#FFA41C',
          borderColor: '#FF8F00',
          color: '#0F1111',
          borderRadius: 100,
          marginBottom: 16,
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;
