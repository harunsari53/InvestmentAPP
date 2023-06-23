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
        initialParams={{iconName: 'bitcoin : font'}}
      />
      <Tab.Screen
        name="Currency"
        component={Currency}
        initialParams={{iconName: 'dollar : font'}}
      />
      <Tab.Screen
        name="Favorites"
        component={Home}
        options={{title: 'Favorites'}}
        initialParams={{iconName: 'favorite : material'}}
      />
      <Tab.Screen
        name="Emtia"
        component={Emtia}
        initialParams={{iconName: 'gold : materialcomm'}}
      />
      <Tab.Screen
        name="Exchange"
        component={Exchange}
        initialParams={{iconName: 'exchange : font'}}
      />
    </Tab.Navigator>
  );
}