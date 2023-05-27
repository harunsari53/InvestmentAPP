import React, {useRef} from 'react';
import {
  View,
  PanResponder,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Svg, Circle} from 'react-native-svg';

const AnimatedWheel = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        Animated.event([null, {dx: rotation}], {
          useNativeDriver: true,
        })(null, gestureState);
      },
      onPanResponderRelease: (_, gestureState) => {
        Animated.spring(rotation, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  const icons = [
    {
      name: 'icon1',
      text: 'Icon 1',
      onPress: () => console.log('Icon 1 clicked'),
    },
    {
      name: 'icon2',
      text: 'Icon 2',
      onPress: () => console.log('Icon 2 clicked'),
    },
    {
      name: 'icon3',
      text: 'Icon 3',
      onPress: () => console.log('Icon 3 clicked'),
    },
    {
      name: 'icon4',
      text: 'Icon 4',
      onPress: () => console.log('Icon 4 clicked'),
    },
    {
      name: 'icon5',
      text: 'Icon 5',
      onPress: () => console.log('Icon 5 clicked'),
    },
  ];

  const angle = 360 / icons.length;
  const radius = 120; // Radius of the circle

  const rotateWheel = {
    transform: [
      {
        rotate: rotation.interpolate({
          inputRange: [-180, 180],
          outputRange: ['-180deg', '180deg'],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.wheel, rotateWheel]}
        {...panResponder.panHandlers}>
        {icons.map((icon, index) => {
          const iconAngle = index * angle;
          const iconX = Math.cos((iconAngle * Math.PI) / 180) * radius + 115; // 115 is the cx of the circle
          const iconY = Math.sin((iconAngle * Math.PI) / 180) * radius + 115; // 115 is the cy of the circle

          return (
            <TouchableOpacity
              key={icon.name}
              style={[styles.iconContainer, {left: iconX, top: iconY}]}
              onPress={icon.onPress}>
              <Animated.View style={styles.icon}>
                <Text style={styles.text}>{icon.text}</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheel: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderWidth: 1,
    zIndex: 99,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default AnimatedWheel;
