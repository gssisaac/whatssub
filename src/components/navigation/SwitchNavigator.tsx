import {
  NavigationContainer,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import React, { useContext } from 'react';

import { AppContext } from '../../providers';
import AuthLoadingScreen from '../screen/AuthLoading';
import AuthStackNavigator from './AuthStackNavigator';
import ExamplePieChartMonth from '../screen/ExamplePieChartMonth';
import HomeTabNavigator from './HomeTabNavigator';
import MainEmpty from '../screen/MainEmpty';
import MainStackNavigator from './MainStackNavigator';
import ScreenDetail from '../screen/ServiceDetail';
import Setting from '../screen/Setting';
import { createTheme } from '../../theme';

const SwitchNavigator: NavigationContainer = createSwitchNavigator(
  {
    AuthLoadingScreen,
    AuthStackNavigator,
    MainStackNavigator,
    HomeTabNavigator,
    ExamplePieChartMonth,
    ScreenDetail,
    Setting,
    MainEmpty,
  },
  {
    initialRouteName: 'MainStackNavigator',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default function MySwitchNavigator() {
  const { state, changeTheme } = useContext(AppContext);
  const { theme } = state;
  return (
    <AppContainer
      screenProps={{
        theme: createTheme(theme),
        changeTheme,
      }}
    />
  );
};
