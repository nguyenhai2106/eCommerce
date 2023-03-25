import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {
    padding: 8,
    backgroundColor: 'white',
    marginVertical: 4,
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
    textAlign: 'center',
    fontWeight: '500',
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
    color: '#007084',
  },
  oldPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'red',
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 8,
    lineHeight: 24,
    textAlign: 'justify',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    marginVertical: 16,
    borderRadius: 4,
  },
});
export default styles;
