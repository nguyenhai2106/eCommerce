import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Button from '../../components/Button';

const MenuScreen = () => {
  const onLogOut = () => {};
  return (
    <SafeAreaView>
      <Button
        text="Sign Out"
        onPress={onLogOut}
        containerStyles={{borderRadius: 100}}></Button>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
