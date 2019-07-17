import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Modal,
} from "react-native";

import LayoutSizes from "../constants/layout";
import { H3 } from "./styledText";
import NavIcon from './navIcon';

const CloseIcon = require("../../assets/icons/close/close.png");

const CustomModal = ({ title, children, customStyle, visible, hideModal }) => (
  <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={() => true}>
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <H3 style={{ flex: 1 }}>{title}</H3>
          <NavIcon
            icon={CloseIcon}
            height={15}
            width={15}
            onPress={() => hideModal()}
            style={{ padding: 0 }}
          />
        </View>
        <ScrollView style={[customStyle]}>{children}</ScrollView>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  modalContainer: {
    paddingHorizontal: 20,
    width: LayoutSizes.window.width * 0.9,
    minHeight: LayoutSizes.window.height * 0.25,
    maxHeight: LayoutSizes.window.height * 0.5,
    backgroundColor: "#fff"
  },
  closeButton: {
    flex: 1,
    justifyContent: "space-between"
  }
});

export default CustomModal;
