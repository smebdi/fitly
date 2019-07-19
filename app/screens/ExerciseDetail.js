import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  Text,
  Dimensions
} from 'react-native';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';
import { H2, BodyText } from '../components/styledText';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const iconSize = 125;
const containerWidth = 300;
const marginWidth = 15;

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

const staticDistanceUnits = {
  'Miles':      { isActive: true  },
  'Kilometers': { isActive: false }
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
     selectedForm: this.props.navigation.state.params.selectedForm,
     durations: staticDurations,
     intensities: staticIntensities,
     distanceUnits: staticDistanceUnits,
     distance: 5,
     sliderMinimum: 0,
     sliderMaximum: 10,
  }

  _clearObject = (object) => {
    Object.keys(object).forEach(v => object[v].isActive = false)
  }

  objectLength = (object) => {
    return Object.keys(object).length
  }

  _getUnitTypeShort = (distanceUnits) => {
    return Object.keys(distanceUnits).map((v) => {
      if (staticDistanceUnits[v].isActive && v == "Miles") return "mi"
      if (staticDistanceUnits[v].isActive && v == "Kilometers") return "km"
    })
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

  distanceUnitPress = (distanceType) => {
    this._clearObject(this.state.distanceUnits);
    this.state.distanceUnits[distanceType].isActive = true;
    this.setState({ distanceUnits: this.state.distanceUnits });
  }

  selectFormPress = (form) => {
    this.setState({ selectedForm: form })
  }

  savePress = (form) => {
    console.log(form)
  }

  render() {

      let { exercise, durations, intensities, distance, distanceUnits } = this.state;

      return (
        <Fragment>
        <View style={styles.flexCenter}>
          <StatusBar barStyle="light-content" />
            <LinearGradient colors={['slategray', 'lightslategray', 'whitesmoke']} style={styles.linearGradient}>
              <ScrollView style={[styles.header, {flex: 1}]}>
                
                <View style={styles.grid}>
                    <Image source={exercise.iconColor} style={styles.iconSize}/>
                </View>

                {this._renderDurationIntensityForm(exercise, durations, intensities)}
                {this._renderDistanceForm(exercise, distance, distanceUnits)}
                {this._renderProgressForm()}

              </ScrollView>
            </LinearGradient>
        </View>
        </Fragment>
      );
    }

    _renderSaveButton = (func) => {
        return (
          <View style={[{position: 'absolute', bottom: -120, left: marginWidth}]}>
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
                onPress={func}
              />
          </View>
        )
    }

    _renderProgressForm = () => {
      if (this.state.selectedForm == 'View Your Progress') return <Text>Progress</Text>
    }

    _renderDistanceForm = (exercise, distance, distanceUnits) => {

      let { sliderMinimum, sliderMaximum } = this.state;

      if (this.state.selectedForm == 'Distance') return (
        <View style={{flex: 1}}>
          <View style={styles.grid}>
            <H2>Distance</H2>
          </View>

          <View style={[styles.grid, { flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginHorizontal: marginWidth, paddingTop: 20 }]}> 
            <View style={{flexDirection: "row"}}>

              <View style={{flex: 1, justifyContent: "center"}}>
                <TouchableOpacity style={{paddingHorizontal: 5, justifyContent: "center", alignItems: "center"}} onPress={() => {
                    this.setState({ 
                      sliderMaximum: (sliderMaximum / 2 > distance + 1) ? Math.round(sliderMaximum / 2) : Math.round(distance + 1),
                      sliderMinimum: (sliderMinimum * 2 < distance - 1) ? ((sliderMinimum >= 1) ? Math.round(sliderMinimum * 2) : 1) : ((distance > 0) ? Math.round(distance - 1) : 0)
                    }, () => {
                      if (distance > sliderMaximum) this.setState({ distance: sliderMaximum })
                    })
                  }}
                >
                  <Image style={{height: 22, width: 22}} source={require('../../assets/icons/zoom/zoom-in.png')}/>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1, justifyContent: "center", flexDirection: "row"}}>
                <BodyText style={{fontSize: 22}}>{`${Number(distance).toFixed(2)} `}</BodyText>
                <BodyText style={{fontSize: 22}}>{this._getUnitTypeShort(distanceUnits)}</BodyText>
              </View>

              <View style={{flex: 1, justifyContent: "center"}}>
                <TouchableOpacity style={{paddingHorizontal: 5, justifyContent: "center", alignItems: "center"}} onPress={() => {
                    this.setState({ 
                      sliderMaximum: (sliderMaximum * 2 < 50) ? Math.round(sliderMaximum * 2) : 50,
                      sliderMinimum: (sliderMinimum / 2 > 0 && sliderMinimum > 0)  ? Math.round(sliderMinimum / 2) : 0
                    })
                  }}
                >
                  <Image style={{height: 22, width: 22}} source={require('../../assets/icons/zoom/zoom-out.png')}/>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <Text style={{marginTop: 2}}>{sliderMinimum}</Text>
              <Slider
                style={{width: containerWidth - 20, marginTop: marginWidth, height: 50}}
                minimumValue={sliderMinimum}
                maximumValue={sliderMaximum}
                value={distance}
                onValueChange={(val) => {
                  this.setState({distance: val})
                }}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />
              <Text style={{marginTop: 2}}>{sliderMaximum}</Text>
            </View>
          </View>

          <View style={styles.grid}>
            {Object.keys(distanceUnits).map((v) => {
              return (
                <Button 
                  key={`${v}_distanceButton`}
                  title={`${v}`}
                  type="solid"
                  raised={true}
                  size={30}
                  buttonStyle={{ backgroundColor: '#303030', width: (containerWidth / this.objectLength(distanceUnits)) }}
                  titleStyle={{color: (!distanceUnits[v].isActive) ? 'white' : 'black'}}
                  containerStyle={{ borderColor: "black", marginHorizontal: marginWidth }}
                  ViewComponent={LinearGradient}
                  linearGradientProps={(!distanceUnits[v].isActive) ?
                  {
                    colors: [ '#606060', '#505050' ],
                    start: { x: 0, y: 0 },
                    end: { x: 1, y: 1 },
                  } : 
                  {
                    colors: [ '#B8B8B8', '#C8C8C8' ],
                    start: { x: 0, y: 0 },
                    end: { x: 1, y: 1 },
                  }}
                  onPress={() => {this.distanceUnitPress(v)}}
              />
              )
            })}
          </View>

          {this._renderSaveButton(() => this.savePress(exercise, distance, distanceUnits))}

        </View>
      )
    }

    _renderDurationIntensityForm = (exercise, durations, intensities) => {
        if (this.state.selectedForm == 'Duration & Intensity') return (
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

              {this._renderSaveButton(() => this.savePress({exercise, durations, intensities}))}

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

export default Home;
