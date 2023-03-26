import {View, StyleSheet, useColorScheme, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProductItem from '../../components/ProductItem';
import ActivityIndicatorProduct from '../../components/ActivityIndicator/ActivityIndicator';

interface size {
  weight: number;
  price: number;
}

interface Product {
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

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetch(
        'https://backend-service-lm1y.onrender.com/products',
      ).then(response => response.json());
      setProducts(productsData);
    };
    fetchData();
  }, []);
  if (products.length == 0) {
    return <ActivityIndicatorProduct />;
  }
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    paddingVertical: 6,
  },
});

export default HomeScreen;
