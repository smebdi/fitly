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
import { H2, H3 } from '../components/styledText';

const { width } = Dimensions.get('window');
const iconSize = 125;
const marginWidth = 15;

class Progress extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        height: 24
      },
      headerTitle: "Today's Progress",
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
     fill: 75
  }

  render() {

      return (
        <Fragment>
        <View style={styles.flexCenter}>
          <StatusBar barStyle="light-content" />
            <LinearGradient colors={['lightslategray', 'gainsboro', 'white']} style={styles.linearGradient}>
              <ScrollView style={[styles.header, {flex: 1}]}>
                
                <View style={[styles.grid, styles.subHeader]}>
                    <H2>Walking/Running</H2>
                </View>
                <View style={styles.grid}>
                    <View style={styles.tableContainer}>
                        <View style={{flex:1, flexDirection: "row"}}>
                            <H3 style={[styles.table, styles.tableLeft]}>
                            { `${Math.round(4200 * (this.state.fill / 100) )}` }
                            </H3>
                            <H3 style={[styles.table, styles.tableRight]}>
                            Steps
                            </H3>
                        </View>
                    </View>
                </View>
                <View style={styles.grid}>
                    <View style={styles.tableContainer}>
                        <View style={{flex:1, flexDirection: "row"}}>
                            <H3 style={[styles.table]}>
                            { `${(3 * (this.state.fill / 100)).toFixed(2)}` }
                            </H3>
                            <H3 style={[styles.table]}>
                            miles
                            </H3>
                        </View>
                    </View>
                </View>

                <View style={[styles.grid, styles.subHeader]}>
                    <H2>Biking</H2>
                </View>
                <View style={styles.grid}>
                    <View style={styles.tableContainer}>
                        <View style={{flex:1, flexDirection: "row"}}>
                            <H3 style={[styles.table, styles.tableLeft]}>
                            { `${(7 * (this.state.fill / 100)).toFixed(2)}` }
                            </H3>
                            <H3 style={[styles.table, styles.tableRight]}>
                            miles
                            </H3>
                        </View>
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
    marginTop: 80
  },
  subHeader: {
    marginTop: 40
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
    justifyContent: "center", 
    alignItems: "center",
    flexDirection: "row"
  },
  table: {
    fontSize: 14,
    color: 'whitesmoke',
    paddingVertical: 7,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#162C4462',
    textAlign: "center", 
    flex: 1,
  },
  tableContainer: {
    flexDirection: "row", 
    justifyContent: "center", 
    marginHorizontal: 20
  }
});

export default Progress;
