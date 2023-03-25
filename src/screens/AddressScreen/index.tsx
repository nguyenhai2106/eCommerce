import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import {Country, State, City} from 'country-state-city';
import Button from '../../components/Button';
import {Alert} from 'react-native';

const countries = countryList.getData();
const AddressScreen = () => {
  const [country, setCountry] = useState(countries[240].code);

  const [fullname, setFullname] = useState('');
  const [fullnameError, setFullnameError] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState('');

  const [state, setState] = useState({
    country: '',
    fullname: '',
  });

  const onChangeCountry = (country: string) => {
    setCountry(country);
  };

  const validateForm = () => {
    let check = true;
    if (!fullname) {
      setFullnameError('Họ và tên không hợp lệ!');
      check = false;
    }
    if (!phoneNumber) {
      setPhoneNumberError('Số điện thoại không hợp lệ!');
      check = false;
    }
    if (!address) {
      setAddressError('Địa chỉ giao hàng không hợp lên!');
      check = false;
    }
    if (!city) {
      setCityError('Tên thành phố không hợp lệ!');
      check = false;
    }
    return check;
  };
  const onCheckout = () => {
    if (!validateForm()) {
      Alert.alert('Vui lòng điền đầy đủ các thông tin');
      return;
    } else {
      console.warn('Check Out Successfully!');
    }
  };

  const validateAddress = () => {
    if (address.length < 10) {
      setAddressError('Địa chỉ giao hàng quá ngắn!');
    }
    if (address.length > 100) {
      setAddressError('Địa chỉ giao hàng quá dài!');
    }
  };

  const validateFullname = () => {
    if (address.length < 3) {
      setFullnameError('Họ và tên không hợp lệ!');
    }
  };

  const validatePhoneNumber = () => {
    if (phoneNumber.length < 10) {
      setPhoneNumberError('Số điện thoại không hợp lệ!');
    }
  };

  const validateCity = () => {
    if (city.length < 3) {
      setCityError('Tên thành phố quá ngắn!');
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView style={styles.root}>
        <View style={styles.countryPickerContainer}>
          <Picker
            selectedValue={country}
            onValueChange={country => {
              onChangeCountry(country);
            }}>
            {countries.map(country => (
              <Picker.Item
                key={country.code}
                value={country.code}
                label={country.name}
              />
            ))}
          </Picker>
        </View>

        {/* Full name */}
        <View style={styles.row}>
          <Text style={styles.label}>Họ Tên</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Full Name"
            value={fullname}
            onChangeText={fullname => {
              setFullname(fullname);
              setFullnameError('');
            }}
            onEndEditing={validateFullname}
          />
        </View>
        {fullnameError && (
          <Text style={styles.errorLabel}>{fullnameError}</Text>
        )}

        {/* Phone number */}
        <View style={styles.row}>
          <Text style={styles.label}>Số Điện Thoại</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={phoneNumber => {
              setPhoneNumber(phoneNumber);
              setPhoneNumberError('');
            }}
            onEndEditing={validatePhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        {phoneNumberError && (
          <Text style={styles.errorLabel}>{phoneNumberError}</Text>
        )}

        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Địa Chỉ</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Address"
            value={address}
            multiline
            onEndEditing={validateAddress}
            onChangeText={address => {
              setAddress(address);
              setAddressError('');
            }}
          />
        </View>
        {addressError && <Text style={styles.errorLabel}>{addressError}</Text>}

        {/* City */}
        <View style={styles.row}>
          <Text style={styles.label}>Thành Phố</Text>
          <TextInput
            style={styles.textInput}
            placeholder="City"
            value={city}
            onEndEditing={validateCity}
            onChangeText={city => {
              setCity(city);
              setCityError('');
            }}
          />
        </View>
        {cityError && <Text style={styles.errorLabel}>{cityError}</Text>}

        <Button
          text="Đặt Hàng"
          onPress={onCheckout}
          containerStyles={{marginTop: 12, backgroundColor: 'red'}}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  root: {padding: 8, backgroundColor: 'white', marginVertical: 4},
  row: {},
  countryPickerContainer: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginVertical: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 4,
    paddingLeft: 8,
    fontSize: 16,
  },
  errorLabel: {
    color: 'red',
    marginTop: 8,
    marginBottom: -4,
  },
});
