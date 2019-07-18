import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import NavIcon from '../components/navIcon';
import LinearGradient from 'react-native-linear-gradient';
import { BodyText } from '../components/styledText';

import { exercises } from '../constants/exercises';
const iconSize = 75;


class Home extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      headerStyle: {
        height: 22
      },
      headerTitle: "Choose your exercise",
      headerTitleStyle: {
          fontFamily: "Menlo-Bold",
          color: "#2d2d2d"
      },
      headerTransparent: true,
    }
  };
 
  constructor(props) {
    super(props);
  }

  state = {
     exercises
  }

  highlight(key) {
    this.state.exercises[key].isTouched = true
    this.setState({
      exercises: this.state.exercises
    })
  }

  highlightOut(key) {
    this.state.exercises[key].isTouched = false
    this.setState({
      exercises: this.state.exercises
    })
  }

  navigate(exercise) {
    this.props.navigation.navigate("ExerciseDetail", { exercise })
  }

  _renderItem(item) {
    return (
      <TouchableOpacity 
        activeOpacity={.5}
        style={{flex: 1}} 
        onPressIn={() => {this.highlight(item.key)}}
        onPressOut={() => {this.highlightOut(item.key)}}
        onPress={() => {this.navigate(item)}}
      >
        <View style={[styles.grid]}>
            <Image source={(!item.isTouched) ? item.icon: item.iconColor} style={styles.iconSize}/>
            <Text style={styles.iconText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  _renderRow(leftItem, rightItem) {
    return (
      <View style={styles.exerciseRow}>
        <View style={[styles.borderGridLeft, (leftItem.isBottom) ? {borderBottomWidth: 0} : {}]}>
          {this._renderItem(leftItem)}
        </View>
        <View style={[styles.borderGridRight, (rightItem.isBottom) ? {borderBottomWidth: 0} : {}]}>
          {this._renderItem(rightItem)}
        </View>
      </View>
    )
  }

  render() {

      let { running, biking, lightLifting, lightExercise, heavyLifting, sports, swimming, yoga, hiking, wheelchair } = this.state.exercises
      return (
        <Fragment>
        <View style={styles.flexCenter}>
          <StatusBar barStyle="light-content" />
            <LinearGradient colors={['lightslategray', 'gainsboro', 'white']} style={styles.linearGradient}>
              <ScrollView style={[styles.header, {flex: 1}]}>
                {this._renderRow(running, biking)}
                {this._renderRow(lightLifting, lightExercise)}
                {this._renderRow(heavyLifting, sports)}
                {this._renderRow(swimming, yoga)}
                {this._renderRow(hiking, wheelchair)}
              </ScrollView>
            </LinearGradient>
        </View>
        </Fragment>
      );
    }
};

const styles = StyleSheet.create({
  header: {
    marginTop: 70
  },
  exerciseRow: {
    flex: 1, 
    marginHorizontal: 10, 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "flex-start"
  },    
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  grid: {
    flex: 1, 
    paddingVertical: 15,
    justifyContent: "center", 
    alignItems: "center"
  },
  borderGridLeft: {
    flex: 1,
    borderColor: 'slategray',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  borderGridRight: {
    flex: 1,
    borderColor: 'slategray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconSize: {
    height: iconSize,
    width: iconSize
  },
  iconText: {
    textAlign: "center", 
    marginTop: 10,
    // fontSize: 12,
    // marginVertical: 0
  }
});

export default Home;
