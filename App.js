import {Image, StyleSheet, Text, View} from 'react-native';
import {TinderCard} from 'rn-tinder-card';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const data = [
  '#FF00FF',
  '#00FFFF',
  '#36d387',
  '#9ef79e',
  '#d5359072',
  '#00FFFF',
  '#ff0b0b',
  '#e2762f',
  '#b159b1',
  '#71e711',
  '#f6e9b9',
];

export default function App() {
  const OverlayRight = () => {
    return (
      <View style={styles.rightIcon}>
        <Image
          source={require('./Images/yes.png')}
          style={{width: 100, height: 100}}
        />
      </View>
    );
  };
  const OverlayLeft = () => {
    return (
      <View style={styles.leftIcon}>
        <Image
          source={require('./Images/no.png')}
          style={{width: 100, height: 100}}
        />
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {data.map((item, index) => {
        return (
          <View
            style={styles.cardContainer}
            pointerEvents="box-none"
            key={index}>
            <TinderCard
              cardWidth={350}
              cardHeight={700}
              OverlayLabelRight={OverlayRight}
              OverlayLabelLeft={OverlayLeft}
              onSwipedRight={() => {
                console.log('Swiped Right');
              }}
              onSwipedLeft={() => {
                console.log('Swiped Left');
              }}>
              <View style={styles.image} backgroundColor={item} />
            </TinderCard>
          </View>
        );
      })}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  rightIcon: {
    position: 'absolute',
    left: 3,
    top: 3,
  },
  leftIcon: {
    position: 'absolute',
    right: 3,
    top: 3,
  },
});
