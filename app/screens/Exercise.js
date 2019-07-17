import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Text,
} from 'react-native';
import NavIcon from '../components/navIcon';
import LinearGradient from 'react-native-linear-gradient';

const running = require('../../assets/icons/exercise/running/running.png');
const runningColor = require('../../assets/icons/exercise/running/running_color.png');
const bike = require('../../assets/icons/exercise/biking/bicycle.png');
const bikeColor = require('../../assets/icons/exercise/biking/bicycle_color.png');
const lightLifting = require('../../assets/icons/exercise/lightLifting/lightLifting.png');
const lightLiftingColor = require('../../assets/icons/exercise/lightLifting/lightLifting_color.png');
const lightExercise = require('../../assets/icons/exercise/lightExercise/lightExercise.png');
const lightExerciseColor = require('../../assets/icons/exercise/lightExercise/lightExercise_color.png');
const heavyLifting = require('../../assets/icons/exercise/heavyLifting/heavyLifting.png');
const heavyLiftingColor = require('../../assets/icons/exercise/heavyLifting/heavyLifting_color.png');
const sports = require('../../assets/icons/exercise/sports/basketball.png');
const sportsColor = require('../../assets/icons/exercise/sports/basketball_color.png');
const swimming = require('../../assets/icons/exercise/swimming/swimming.png');
const swimmingColor = require('../../assets/icons/exercise/swimming/swimming_color.png');
const yoga = require('../../assets/icons/exercise/yoga/yoga.png');
const yogaColor = require('../../assets/icons/exercise/yoga/yoga_color.png');
const hiking = require('../../assets/icons/exercise/hiking/hiking.png');
const hikingColor = require('../../assets/icons/exercise/hiking/hiking_color.png');
const wheelchair = require('../../assets/icons/exercise/wheelchair/wheelchair.png');
const wheelchairColor = require('../../assets/icons/exercise/wheelchair/wheelchair_color.png');

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

  render() {
      return (
        <Fragment>
        <View style={styles.flexCenter}>
          <StatusBar barStyle="light-content" />
            <LinearGradient colors={['slategray', 'gainsboro', 'white']} style={styles.linearGradient}>
              <ScrollView style={[styles.header, {flex: 1}]}>

                {/* row 1 */}
                <View style={styles.exerciseRow}>
                  <View style={styles.borderGridLeft}>
                    <TouchableOpacity style={{flex: 1}}>
                      <View style={[styles.grid]}>
                          <Image source={running} style={{height: 75, width: 75}}/>
                          <Text style={{textAlign: "center", marginTop: 10}}>Walking/Running</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.borderGridRight}>
                    <TouchableOpacity style={{flex: 1}}>
                    <View style={[styles.grid]}>
                          <Image source={bike} style={{height: 75, width: 75}}/>
                          <Text style={{textAlign: "center", marginTop: 10}}>Biking</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* row 2 */}
                <View style={styles.exerciseRow}>
                  <View style={styles.borderGridLeft}>
                    <TouchableOpacity style={{flex: 1}}>
                      <View style={[styles.grid]}>
                          <Image source={lightLifting} style={{height: 75, width: 75}}/>
                          <Text style={{textAlign: "center", marginTop: 10}}>Light Lifting</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.borderGridRight}>
                    <TouchableOpacity style={{flex: 1}}>
                    <View style={[styles.grid]}>
                          <Image source={lightExercise} style={{height: 75, width: 75}}/>
                          <Text style={{textAlign: "center", marginTop: 10}}>Static Exercise</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* row 3 */}
                <View style={styles.exerciseRow}>
                  <View style={styles.borderGridLeft}>
                    <TouchableOpacity style={{flex: 1}}>
                      <View style={[styles.grid]}>
                          <Image source={heavyLifting} style={{height: 75, width: 75}}/>
                          <Text style={{textAlign: "center", marginTop: 10}}>Heavy Lifting</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.borderGridRight}>
                    <TouchableOpacity style={{flex: 1}}>
                    <View style={[styles.grid]}>
                          <Image source={sports} style={{height: 75, width: 75}}/>
                          <Text style={{textAlign: "center", marginTop: 10}}>Sports</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* row 4 */}
                <View style={styles.exerciseRow}>
                  <View style={styles.borderGridLeft}>
                    <TouchableOpacity style={{flex: 1}}>
                      <View style={[styles.grid]}>
                          <Image source={swimming} style={{height: 75, width: 75}}/>
                          <Text style={{textAlign: "center", marginTop: 10}}>Swimming</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.borderGridRight}>
                    <TouchableOpacity style={{flex: 1}}>
                    <View style={[styles.grid]}>
                          <Image source={yoga} style={{height: 75, width: 75}}/>
                          <Text style={{textAlign: "center", marginTop: 10}}>Yoga/Pilates</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* row 5 */}
                <View style={styles.exerciseRow}>
                  <View style={[styles.borderGridLeft, { borderBottomWidth: 0 }]}>
                    <TouchableOpacity style={{flex: 1}}>
                      <View style={[styles.grid]}>
                          <Image source={hiking} style={{height: 75, width: 75}}/>
                          <Text style={{textAlign: "center", marginTop: 10}}>Hiking</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.borderGridRight, { borderBottomWidth: 0 }]}>
                    <TouchableOpacity style={{flex: 1}}>
                    <View style={[styles.grid]}>
                          <Image source={wheelchair} style={{height: 75, width: 75}}/>
                          <Text style={{textAlign: "center", marginTop: 10}}>Wheelchair Distance</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
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
  }
});

export default Home;
