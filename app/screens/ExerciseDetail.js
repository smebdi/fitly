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
import LinearGradient from 'react-native-linear-gradient';
const iconSize = 125;


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
     exercise: this.props.navigation.state.params.exercise
  }

  render() {

      let exercise = this.state.exercise
      return (
        <Fragment>
        <View style={styles.flexCenter}>
          <StatusBar barStyle="light-content" />
            <LinearGradient colors={['slategray', 'lightslategray', 'whitesmoke']} style={styles.linearGradient}>
              <ScrollView style={[styles.header, {flex: 1}]}>
                
                <View style={styles.grid}>
                    <Image source={exercise.iconColor} style={styles.iconSize}/>
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
