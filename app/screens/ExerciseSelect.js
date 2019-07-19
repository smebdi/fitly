import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';

const { width } = Dimensions.get('window');
const iconSize = 125;
const marginWidth = 15;

class ExerciseSelect extends Component {

  static navigationOptions = ({ navigation }) => {
    const exercise = navigation.state.params.exercise
    return {
      headerStyle: {
        height: 24
      },
      headerTitle: exercise.title,
      headerTitleStyle: {
        fontFamily: "Menlo-Bold",
        color: "#2d2d2d",
        fontSize: 18
      },
      headerTintColor: '#2d2d2d',
      headerTransparent: true,
    }
  };
 
  constructor(props) {
    super(props);
  }

  state = {
     exercise: this.props.navigation.state.params.exercise,
     selectedForm: '',
     exerciseSelectOptions: []
  }

  selectFormPress = (exercise, selectedForm) => {
    this.props.navigation.navigate("ExerciseDetail", { exercise, selectedForm })
  }

  componentDidMount() {
    let { exercise, exerciseSelectOptions } = this.state;
    if (exercise) exerciseSelectOptions.unshift('View Your Progress');
    if (exercise.hasIntensity) exerciseSelectOptions.unshift('Duration & Intensity');
    if (exercise.hasDistance) exerciseSelectOptions.unshift('Distance');
    this.setState({ exerciseSelectOptions })
  }

  render() {

      let { exercise, exerciseSelectOptions } = this.state;

      return (
        <Fragment>
        <View style={styles.flexCenter}>
          <StatusBar barStyle="light-content" />
            <LinearGradient colors={['slategray', 'lightslategray', 'whitesmoke']} style={styles.linearGradient}>
              <ScrollView style={[styles.header, {flex: 1}]}>
                
                <View style={styles.grid}>
                    <Image source={exercise.iconColor} style={styles.iconSize}/>
                </View>

                <View style={{flex: 1, marginTop: marginWidth}}>
                    {exerciseSelectOptions.map((v) => {
                        return (
                            <View key={`${v}_buttonContainer`} style={[styles.grid]}>
                                <Button 
                                    key={`${v}_selectButton`}
                                    title={`${v}`}
                                    titleStyle={{fontFamily: "Menlo", color: "white"}}
                                    type="solid"
                                    size={240}
                                    buttonStyle={{height: 75, width: (width - marginWidth * 2)}}
                                    raised={true}
                                    ViewComponent={LinearGradient}
                                    linearGradientProps={{
                                        colors: [ '#505050', '#303030' ],
                                        start: { x: 0, y: 0 },
                                        end: { x: 1, y: 1 },
                                    }}
                                    onPress={() => {this.selectFormPress(exercise, v)}}
                                />
                            </View>
                        )
                    })}
                    </View>

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
    paddingVertical: marginWidth,
    justifyContent: "center", 
    alignItems: "center",
    flexDirection: "row"
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
    marginTop: 10,
    height: iconSize,
    width: iconSize
  },
  iconText: {
    textAlign: "center", 
    marginTop: 10
  }
});

export default ExerciseSelect;
