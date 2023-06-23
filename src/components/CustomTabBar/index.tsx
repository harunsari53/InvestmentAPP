import {View, LogBox, Pressable} from 'react-native';
import React from 'react';
import globalStyle from '../../constants/style';
import styles from './style';
import {midRouteName} from '../../constants/variables';
import {Icon} from 'general-components/src';
import {colors} from '../../constants/colors';

LogBox.ignoreAllLogs()

export default function CustomTabBar({state, descriptors, navigation}: any) {
  return (
    <View style={[globalStyle.midShadow, styles.container]} key={state.index}>
      {state?.routes?.map((route: any, index: number) => {
        const isFocused = state.index == index;
        const {iconName}: {iconName: any} = route.params;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(
              {name: route.name, merge: true},
              {params: route.params},
            );
          }
        };
        return (
          <Pressable
            onPress={onPress}
            style={
              route.name == midRouteName ? styles.midTabStyle : styles.tabStyle
            }
            key={index}>
            <Icon
              name={iconName}
              size={route.name == midRouteName ? 40 : 28}
              color={
               isFocused
                  ? colors.gold
                  : colors.grey
              }
            />
          </Pressable>
        );
      })}
    </View>
  );
}
