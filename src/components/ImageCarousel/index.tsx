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
            key={item}
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
          return item;
        }}
      />
      <View style={styles.dotContainer}>
        {images.map((image, index) => (
          <View
            key={image}
            style={[
              styles.dot,
              {
                backgroundColor: index == activeIndex ? '#2374e1' : '#ffffff',
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
    width: 12,
    height: 12,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#989898',
    marginHorizontal: 4,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
