import React from 'react';
import { Image, View } from "react-native";
import { createAppContainer, createStackNavigator, createBottomTabNavigator, BottomTabBar } from 'react-navigation';

import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import Exercise from '../screens/Exercise';
import ExerciseSelect from '../screens/ExerciseSelect';
import ExerciseDetail from '../screens/ExerciseDetail';

const HomeIcon = require("../../assets/icons/home/home.png");
const HomeColorIcon = require("../../assets/icons/home/home_color.png");
const CalendarIcon = require("../../assets/icons/calendar/calendar.png");
const CalendarColorIcon = require("../../assets/icons/calendar/calendar_color.png");
const DumbbellIcon = require("../../assets/icons/dumbbell/dumbbell.png");
const DumbbellColorIcon = require("../../assets/icons/dumbbell/dumbbell_color.png");

const HomeStack = createStackNavigator({
    Home
});
  
HomeStack.navigationOptions = {
    tabBarLabel: <View />,
    tabBarIcon: ({ focused }) => {
        return (focused) ?
        <Image source={HomeColorIcon} style={{ width: 28, height: 28 }} /> :
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
        <Image source={CalendarColorIcon} style={{ width: 28, height: 28 }} /> :
        <Image source={CalendarIcon} style={{ width: 26, height: 26 }} />
    }
};

const ExerciseStack = createStackNavigator({
    Exercise,
    ExerciseSelect,
    ExerciseDetail
});

ExerciseStack.navigationOptions = {
    headerTitleStyle: {
        fontFamily: "Menlo-Bold",
        color: "#2d2d2d"
    },
    tabBarLabel: <View />,
    tabBarIcon: ({ focused }) => {
        return (focused) ?
        <Image source={DumbbellColorIcon} style={{ width: 32, height: 32 }} /> :
        <Image source={DumbbellIcon} style={{ width: 30, height: 30 }} />
    }
};

export default createAppContainer(
    createBottomTabNavigator({
        HomeStack,
        CalendarStack,
        ExerciseStack
    })
)