import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const ActivityIndicatorProduct = () => {
  const [text, setText] = useState('');
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setText('Value updated successfully');
      setAnimate(false);
    }, 6000);
  });
  return (
    <View style={styles.activityI}>
      <ActivityIndicator animating={animate} color="#007185" size="large" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ActivityIndicatorProduct;
const styles = StyleSheet.create({
  activityI: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
