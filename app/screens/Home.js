import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import NavIcon from '../components/navIcon';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { H2, BodyText, H3 } from '../components/styledText'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class Home extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      headerStyle: {
        height: 30
      },
      headerTitle: "Fitly",
      headerTitleStyle: {
          fontFamily: "Menlo-Bold",
          color: "whitesmoke",
          fontSize: 26
      },
      headerTransparent: true,
      headerRight: (
        <NavIcon
          icon={require('../../assets/icons/info/question_dark.png')}
          width={22}
          height={22}
          onPress={() => navigation.navigate("Home")}
        />
      )
    }
  };
 
  constructor(props) {
    super(props);
  }

  state = {
    fill: 77
  }

  render() {
      return (
        <Fragment>
          <StatusBar barStyle="light-content" />
          <View style={{flex: 1}}>
            <ImageBackground source={require('../../assets/fitly_background.png')} style={styles.centeredView}>

              <View style={styles.grid}>
                <AnimatedCircularProgress
                  ref={(ref) => this.circularProgress = ref}
                  size={300}
                  width={20}
                  fill={this.state.fill}
                  tintColor="#162C44"
                  backgroundColor="#162C4450"
                  rotation={180}
                >
                  {(fill) => {console.log(fill); return(
                      <H2 style={{color: 'whitesmoke', fontSize: 60}}>
                        { `${this.state.fill}%` }
                      </H2>
                    )}
                  }
                </AnimatedCircularProgress>

                <View style={{position: "absolute", bottom: 20}}>
                  <BodyText style={{fontSize: 15}}>
                    You've almost reached your daily goal!
                  </BodyText>
                </View>

              </View>

            </ImageBackground>
          </View>
        </Fragment>
      );
    }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  grid: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    flexDirection: "column"
  },
});

export default Home;