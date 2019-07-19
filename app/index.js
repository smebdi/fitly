import AppleHealthKit from 'rn-apple-healthkit';
import React from 'react';
import Navigator from './config/routes';

let options = {
  permissions: {
      read: ["Height", "Weight", "StepCount", "ActiveEnergyBurned"],
      write: ["Height", "Weight", "StepCount", "ActiveEnergyBurned"]
  }
};

export default class extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount() {
      AppleHealthKit.initHealthKit(options, (err, results) => {
        if (err) {
            console.log("error initializing Healthkit: ", err);
            console.log(results)
            return;
        }
    
        // Steps Example
        let d = new Date();
        d = new Date(d.getFullYear(), d.getMonth() + 1, d.getDate());
        let stepOptions = {
            date: d.toISOString()
        };
        AppleHealthKit.getStepCount(stepOptions, (err, results) => {
          if (err) {
            console.log(err)
            return; 
          }
          console.log(results)
        });
      });
    }
  
    render() {
      return (
        <Navigator onNavigationStateChange={null} />
      );
    }
  }