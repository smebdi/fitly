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

export const exercises = {
  running: {
    key: "running",
    icon: running,
    iconColor: runningColor,
    isTouched: false,
    isBottom: false,
    title: "Walking/Running"
  },
  biking: {
    key: "biking",
    icon: bike,
    iconColor: bikeColor,
    isTouched: false,
    isBottom: false,
    title: "Biking"
  },
  lightLifting: {
    key: "lightLifting",
    icon: lightLifting,
    iconColor: lightLiftingColor,
    isTouched: false,
    isBottom: false,
    title: "Light Lifting"
  },
  lightExercise: {
    key: "lightExercise",
    icon: lightExercise,
    iconColor: lightExerciseColor,
    isTouched: false,
    isBottom: false,
    title: "Static Exercise"
  },
  heavyLifting: {
    key: "heavyLifting",
    icon: heavyLifting,
    iconColor: heavyLiftingColor,
    isTouched: false,
    isBottom: false,
    title: "Heavy Lifting"
  },
  sports: {
    key: "sports",
    icon: sports,
    iconColor: sportsColor,
    isTouched: false,
    isBottom: false,
    title: "Sports"
  },
  swimming: {
    key: "swimming",
    icon: swimming,
    iconColor: swimmingColor,
    isTouched: false,
    isBottom: false,
    title: "Swimming"
  },
  yoga: {
    key: "yoga",
    icon: yoga,
    iconColor: yogaColor,
    isTouched: false,
    isBottom: false,
    title: "Yoga/Pilates"
  },
  hiking: {
    key: "hiking",
    icon: hiking,
    iconColor: hikingColor,
    isTouched: false,
    isBottom: true,
    title: "Hiking"
  },
  wheelchair: {
    key: "wheelchair",
    icon: wheelchair,
    iconColor: wheelchairColor,
    isTouched: false,
    isBottom: true,
    title: "Wheelchair Distance"
  }
};