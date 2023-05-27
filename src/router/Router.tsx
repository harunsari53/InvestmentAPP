import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InvestoNavigator from './investo-navigator';
import {CoinDetail, CurrencyDetail,EmtiaDetail,ExchangeDetail} from '../pages';
import Login from '../pages/Stack/Login';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="AnimatedWheel" component={Login} /> */}
        <Stack.Screen name="InvestoNavigator" component={InvestoNavigator} />
        <Stack.Screen
          name="CoinDetail"
          component={CoinDetail}
          options={({route}: any) => {
            return {
              headerShown: true,
              title: route?.params?.code
            };
          }}
        />
        <Stack.Screen
          name="CurrencyDetail"
          component={CurrencyDetail}
          options={({route}: any) => {
            return {
              headerShown: true,
              title: route?.params?.code
            };
          }}
        />
         <Stack.Screen
          name="EmtiaDetail"
          component={EmtiaDetail}
          options={({route}: any) => {
            return {
              headerShown: true,
              title: route?.params?.code
            };
          }}
        />
          <Stack.Screen
          name="ExchangeDetail"
          component={ExchangeDetail}
          options={({route}: any) => {
            return {
              headerShown: true,
              title: route?.params?.code
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;