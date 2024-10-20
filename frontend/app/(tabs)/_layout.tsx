import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import RemixIcon from 'rn-remixicon';
import 'react-native-svg';

const tabArr = [
  {
    tabName: 'index',
    tabIcon: 'home3-line',
    tabIconActive: 'home3-fill',
    tabTitle: 'Home Screen',
  },
  {
    tabName: 'favorites',
    tabIcon: 'heart3-line',
    tabIconActive: 'heart3-fill',
    tabTitle: 'Favorites Screen',
  },
  {
    tabName: 'notifications',
    tabIcon: 'notification3-line',
    tabIconActive: 'notification3-fill',
    tabTitle: 'Notificatioins Screen',
  },
  {
    tabName: 'account',
    tabIcon: 'user3-line',
    tabIconActive: 'user3-fill',
    tabTitle: 'Account Screen',
  },
];

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4FAE5A',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabStyle,
        tabBarInactiveTintColor: '#4FAE5A',
      }}
    >
      {tabArr.map((tab, i) => (
        <Tabs.Screen
          key={tab.tabName + i}
          name={tab.tabName}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <RemixIcon
                name={focused ? tab.tabIconActive : tab.tabIcon}
                size={30}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    height: 60,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
    paddingBottom: 0,
    borderTopWidth: 0,
    backgroundColor: '#1E1E1E',
  },
});
