import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';
import HomeScreen from '../screens/HomeScreen';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}
const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#84d8e2',
        height: 72,
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          margin: 8,
          paddingLeft: 8,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#d1d1d1',
          height: 44,
        }}>
        <Ionicons name="ios-search-outline" size={20} />
        <TextInput
          style={{
            height: '100%',
            margin: 8,
            borderRadius: 4,
            fontSize: 16,
            flex: 1,
          }}
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Search Product"
          inputMode="search"
        />
        <Ionicons name="logo-instagram" size={24} style={{margin: 8}} />
        <MaterialIcons
          name="keyboard-voice"
          size={24}
          style={{marginRight: 8}}
        />
      </View>
    </SafeAreaView>
  );
};
const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          header: () => (
            <HeaderComponent
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          ),
        }}>
        <Stack.Screen name="HomeScreen" options={{title: 'Home Screen'}}>
          {() => <HomeScreen searchValue={searchValue} />}
        </Stack.Screen>
        <Stack.Screen component={ProductScreen} name="Product Details" />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default HomeStack;
