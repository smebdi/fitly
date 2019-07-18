import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';
import { H2 } from '../components/styledText';

const { width, height } = Dimensions.get('window');
const iconSize = 125;
const containerWidth = 300;
const marginWidth = 20;

const staticDurations = {
    5:  { isActive: false },
    10: { isActive: false },
    15: { isActive: false },
    20: { isActive: false },
    30: { isActive: false },
    45: { isActive: false },
    60: { isActive: false },
}

// https://www.hhs.gov/fitness/be-active/ways-to-be-active/index.html
const staticIntensities = {
    'Light':    { isActive: false },
    'Moderate': { isActive: false },
    'Vigorous': { isActive: false },
}

class Home extends Component {

  static navigationOptions = ({ navigation }) => {
    const exercise = navigation.state.params.exercise
    return {
      headerStyle: {
        height: 24
      },
      headerTitle: exercise.title,
      headerTitleStyle: {
          fontFamily: "Menlo-Bold",
          color: "whitesmoke",
          fontSize: 20
      },
      headerTintColor: 'whitesmoke',
      headerTransparent: true,
    }
  };
 
  constructor(props) {
    super(props);
  }

  state = {
     exercise: this.props.navigation.state.params.exercise,
     durations: staticDurations,
     intensities: staticIntensities,
     selectedForm: 'durationIntensity'
  }

  _clearObject = (object) => {
    Object.keys(object).forEach(v => object[v].isActive = false)
  }

  objectLength = (object) => {
    return Object.keys(object).length
  }

  durationPress = (durationTime) => {
    this._clearObject(this.state.durations);
    this.state.durations[durationTime].isActive = true;
    this.setState({ durations: this.state.durations });
  }

  intensityPress = (intensityTime) => {
    this._clearObject(this.state.intensities);
    this.state.intensities[intensityTime].isActive = true;
    this.setState({ intensities: this.state.intensities });
  }

  render() {

      let { exercise, durations, intensities } = this.state;

      return (
        <Fragment>
        <View style={styles.flexCenter}>
          <StatusBar barStyle="light-content" />
            <LinearGradient colors={['slategray', 'lightslategray', 'whitesmoke']} style={styles.linearGradient}>
              <ScrollView style={[styles.header, {flex: 1}]}>
                
                <View style={styles.grid}>
                    <Image source={exercise.iconColor} style={styles.iconSize}/>
                </View>

                {this._renderDurationIntensity(durations, intensities)}

              </ScrollView>
            </LinearGradient>
        </View>
        </Fragment>
      );
    }

    _renderDurationIntensity = (durations, intensities) => {
        if (this.state.selectedForm == 'durationIntensity') return (
          <View style={{flex: 1}}>
              <View style={[styles.grid, {underline: {textDecorationLine: 'underline'}}]}>
                  <H2>Duration</H2>
              </View>
  
              <View style={[styles.grid, { justifyContent: "space-between", marginHorizontal: marginWidth }]}> 
                  {Object.keys(durations).map((v) => {
                      return (
                          <Button 
                              key={`${v}_durationButton`}
                              title={`${v}`}
                              type="solid"
                              raised={true}
                              size={30}
                              buttonStyle={{ backgroundColor: '#303030', width: (containerWidth / this.objectLength(durations)) }}
                              titleStyle={{color: (!durations[v].isActive) ? 'white' : 'black'}}
                              containerStyle={{ borderColor: "black" }}
                              ViewComponent={LinearGradient}
                              linearGradientProps={(!durations[v].isActive) ?
                              {
                                  colors: [ '#505050', '#303030' ],
                                  start: { x: 0, y: 0 },
                                  end: { x: 1, y: 1 },
                              } : 
                              {
                                  colors: [ 'lightgray', 'gainsboro' ],
                                  start: { x: 0, y: 0 },
                                  end: { x: 1, y: 1 },
                              }}
                              onPress={() => {this.durationPress(v)}}
                          />
                      )
                  })}                   
              </View>
  
              <View style={styles.grid}>
                  <H2>Intensity</H2>
              </View>
  
              <View style={[styles.grid, { justifyContent: "space-between", marginHorizontal: marginWidth }]}>
                  {Object.keys(intensities).map((v) => {
                      return (
                          <Button 
                              key={`${v}_durationButton`}
                              title={`${v}`}
                              type="solid"
                              raised={true}
                              size={30}
                              buttonStyle={{ backgroundColor: '#303030', width: (containerWidth / this.objectLength(intensities)) }}
                              titleStyle={{color: (!intensities[v].isActive) ? 'white' : 'black'}}
                              containerStyle={{ borderColor: "black" }}
                              ViewComponent={LinearGradient}
                              linearGradientProps={(!intensities[v].isActive) ?
                              {
                                  colors: [ '#606060', '#505050' ],
                                  start: { x: 0, y: 0 },
                                  end: { x: 1, y: 1 },
                              } : 
                              {
                                  colors: [ 'lightgray', 'gainsboro' ],
                                  start: { x: 0, y: 0 },
                                  end: { x: 1, y: 1 },
                              }}
                              onPress={() => {this.intensityPress(v)}}
                          />
                      )
                  })}     
              </View>

              <View style={[styles.grid, {marginTop: 150}]}>
                  <Button 
                    title={"Save"}
                    type="solid"
                    size={240}
                    buttonStyle={{width: (width - marginWidth * 2)}}
                    raised={true}
                    ViewComponent={LinearGradient}
                    titleStyle={{color: 'white'}}
                    linearGradientProps={{
                        colors: [ '#707070', '#606060' ],
                        start: { x: 0, y: 0 },
                        end: { x: 1, y: 1 },
                    }}
                  />
              </View>
          </View>
        )
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

export default Home;
