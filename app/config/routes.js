import React from 'react';
import { Transition } from 'react-native-reanimated';
import { Image, View } from "react-native";
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import Exercise from '../screens/Calendar';

const HomeIcon = require("../../assets/icons/home/home.png");
const HomeColorIcon = require("../../assets/icons/home_color/home.png");
const CalendarIcon = require("../../assets/icons/calendar/calendar.png");
const CalendarColorIcon = require("../../assets/icons/calendar_color/calendar.png");
const DumbbellIcon = require("../../assets/icons/dumbbell/dumbbell.png");

const HomeStack = createStackNavigator({
    Home
});
  
HomeStack.navigationOptions = {
    tabBarLabel: <View />,
    tabBarIcon: ({ focused }) => {
        return (focused) ?
        <Image source={HomeColorIcon} style={{ width: 40, height: 40 }} /> :
        <Image source={HomeIcon} style={{ width: 26, height: 26 }} />
    }
};

const CalendarStack = createStackNavigator({
    Calendar
});

CalendarStack.navigationOptions = {
    tabBarLabel: <View />,
    tabBarIcon: ({ focused }) => {
        return (focused) ?
        <Image source={CalendarColorIcon} style={{ width: 40, height: 40 }} /> :
        <Image source={CalendarIcon} style={{ width: 26, height: 26 }} />
    }
};

const ExerciseStack = createStackNavigator({
    Exercise
});

ExerciseStack.navigationOptions = {
    tabBarLabel: <View />,
    tabBarIcon: ({ focused }) => {
        return (focused) ?
        <Image source={DumbbellIcon} style={{ width: 40, height: 40 }} /> :
        <Image source={DumbbellIcon} style={{ width: 26, height: 26 }} />
    }
};

export default createAppContainer(
    createBottomTabNavigator({
    HomeStack,
    CalendarStack,
    ExerciseStack
})
)