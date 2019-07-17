import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";

const NavIcon = ({ icon, onPress, width, height, style }) => (
  <TouchableOpacity onPress={() => onPress()}>
    <View style={[styles.container, style]}>
      <Image
        source={icon}
        style={{
          width: width || 20,
          height: height || 20
        }}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 40,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default NavIcon;
