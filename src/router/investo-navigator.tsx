import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Coin, Currency, Emtia, Exchange, Home} from '../pages';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function InvestoNavigator() {
  return (
    <Tab.Navigator tabBar={(props: any) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Coin"
        component={Coin}
        initialParams={{iconName: 'bitcoin : FontAwe'}}
      />
      <Tab.Screen
        name="Currency"
        component={Currency}
        initialParams={{iconName: 'dollar : FontAwe'}}
      />
      <Tab.Screen
        name="Favorites"
        component={Home}
        options={{title: 'Favorites'}}
        initialParams={{iconName: 'ios-person-sharp : Ionicons'}}
      />
      <Tab.Screen
        name="Emtia"
        component={Emtia}
        initialParams={{iconName: 'gold : matcom'}}
      />
      <Tab.Screen
        name="Exchange"
        component={Exchange}
        initialParams={{iconName: 'exchange : FontAwe'}}
      />
    </Tab.Navigator>
  );
}