import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height
  },
  isSmallDevice: width < 400,
  isRegularDevice: width >= 400 && width < 768,
  isLargeDevice: width >= 768 && width < 900,
  isExtraLargeDevice: width >= 900
};
