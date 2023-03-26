import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';
import {FlatList} from 'react-native';

const ImageCarousel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
  const onFlatlistUpdate = useCallback(
    ({viewableItems}: {viewableItems: any}) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    },
    [],
  );

  return (
    <ScrollView>
      <FlatList
        data={images}
        renderItem={({item, index}) => (
          <Image
            key={Math.random()}
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
        onViewableItemsChanged={onFlatlistUpdate}
        keyExtractor={(item, index) => {
          return item + Math.random();
        }}
      />
      <View style={styles.dotContainer}>
        {images.map((image, index) => (
          <View
            key={Math.random()}
            style={[
              styles.dot,
              {
                backgroundColor: index == activeIndex ? '#007185' : '#ffffff',
              },
            ]}></View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  root: {},
  image: {
    margin: 20,
    height: 300,
    resizeMode: 'contain',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    borderWidth: 0.5,
    backgroundColor: '#ffffff',
    borderColor: '#007185',
    marginHorizontal: 4,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
