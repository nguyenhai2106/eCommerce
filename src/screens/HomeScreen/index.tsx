import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useColorScheme,
  FlatList,
} from 'react-native';
import React from 'react';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ScrollView} from 'react-native';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        keyExtractor={item => item._id.$oid}
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
