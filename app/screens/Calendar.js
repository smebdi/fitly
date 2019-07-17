import React, { Component } from "react";
import { View } from "react-native";
import NavIcon from "../components/navIcon";
import Calendar from "../components/calendar";
// import CalendarItem from "../components/CalendarItem";
import Modal from "../components/modal";

const CalendarIcon = require("../../assets/icons/calendar_list/list.png");

class CalendarScreen extends Component {

  static navigationOptions = {
    headerStyle: {
      height: 0,
      width: 0,
    },
    headerTransparent: true
  };

  constructor(props) {
    console.log(props)
    super(props);
  }

  state = { 
    modalOpen: false, 
    modalTitle: "", 
    selectedDate: null 
  }; 

  dayPress = ({ dateString }) => {
    this.setState({ selectedDate: dateString });
    this.setState({ modalTitle: dateString.substring(5), modalOpen: true });
  };

  renderModal = () => (
    <Modal
      visible={this.state.modalOpen}
      title={this.state.modalTitle}
      hideModal={() => this.setState({ modalOpen: false })}
    >
      {/* {this.renderCalendarItems()} */}
    </Modal>
  );

  render() {
    return (
      <View style={{ paddingHorizontal: 0 }}>
        {this.renderModal()}
        <Calendar onCalendarPress={this.dayPress} data={this.props.calendar} />
      </View>
    );
  }
}

export default CalendarScreen;
