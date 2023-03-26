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
    lineHeight: 24,
    fontWeight: '500',
    color: '#007084',
    marginTop: 8,
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
    color: '#ff424e',
  },
  description: {
    marginBottom: 8,
    lineHeight: 24,
    textAlign: 'justify',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    marginVertical: 8,
    borderRadius: 4,
  },
});
export default styles;
