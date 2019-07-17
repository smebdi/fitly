import React from 'react';
import Navigator from './config/routes';

export default class extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount() {
      // SplashScreen.hide();
    }
  
    render() {
      return (
        <Navigator onNavigationStateChange={null} />
      );
    }
  }