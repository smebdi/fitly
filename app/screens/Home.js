import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class Home extends Component {
 
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Fragment>
        <StatusBar barStyle="dark-content" />
        <View style={{flex: 1}}>
            {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.gradientView} /> */}
            <ImageBackground source={require('../../assets/fitly_background.png')} style={styles.gradientView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Other')}>
                    <Text style={styles.sectionTitle}>Fitly</Text>
                </TouchableOpacity>
                <Text style={styles.footer}>Built with React Native</Text>
                <Text style={styles.footer}>Engine: Hermes</Text>
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
  gradientView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: "center"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.light,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
  },
});

export default Home;
