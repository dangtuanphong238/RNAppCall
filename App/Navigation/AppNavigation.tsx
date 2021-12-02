import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import { SplashScreen } from '@/Containers/SplashScreen'

import { SettingScreen } from '@/Containers/SettingScreen'
import { ContactScreen } from '@/Containers/ContactScreen'
import { MyMessageScreen } from '@/Containers/MyMessageScreen'
import { ChatScreen } from '@/Containers/ChatScreen'
import { CallScreen, InComingCallScreen } from '@/Containers/CallScreen'

import { SignInScreen } from '@/Containers/SignInScreen'
import { SignUpScreen } from '@/Containers/SignUpScreen'

// Component
import { HomeTabBar as HomeTabBarComponent } from '@/Components'

// Types
export type HomeTabbarParams = {
  MyMessageScreen: undefined
  ContactScreen: undefined
  SettingScreen: undefined
}

export type AuthStackParams = {
  SignInscreen: undefined
  SignUpscreen: undefined
}

export type AppStackParams = {
  HomeTabbar: undefined
  AuthStack: undefined
  ChatScreen: undefined
  CallScreen: undefined
  InComingCallScreen: undefined
}

export type RootStackParams = {
  SplashScreen: undefined
  AppStack: AppStackParams
}

// Home tabbar
const TabBar = createBottomTabNavigator<HomeTabbarParams>()

const HomeTabBar = () => {
  return (
    <TabBar.Navigator
      backBehavior={'none'}
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <HomeTabBarComponent {...props} />}
    >
      <TabBar.Screen name={'MyMessageScreen'} component={MyMessageScreen} />
      <TabBar.Screen name={'ContactScreen'} component={ContactScreen} />
      <TabBar.Screen name={'SettingScreen'} component={SettingScreen} />
    </TabBar.Navigator>
  )
}

// Auth Stack
const AuthStack = createStackNavigator<AuthStackParams>()

const AuthStacks = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'SignInscreen'}
    >
      <AuthStack.Screen name={'SignInscreen'} component={SignInScreen} />
      <AuthStack.Screen name={'SignUpscreen'} component={SignUpScreen} />
    </AuthStack.Navigator>
  )
}

const AppStack = createStackNavigator<AppStackParams>()

const AppStacks = () => {
  return (
    <AppStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'HomeTabbar'}
    >
      <AppStack.Screen name={'HomeTabbar'} component={HomeTabBar} />
      <AppStack.Screen name={'ChatScreen'} component={ChatScreen} />
      <AppStack.Screen name={'CallScreen'} component={CallScreen} />
      <AppStack.Screen
        name={'InComingCallScreen'}
        component={InComingCallScreen}
      />
    </AppStack.Navigator>
  )
}

const RootStack = createStackNavigator<RootStackParams>()

const RootStacks = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'AppStack'}
    >
      <RootStack.Screen name={'SplashScreen'} component={SplashScreen} />
      <RootStack.Screen name={'AppStack'} component={AppStacks} />
      <AppStack.Screen name={'AuthStack'} component={AuthStacks} />
    </RootStack.Navigator>
  )
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootStacks />
    </NavigationContainer>
  )
}

export default AppNavigation
