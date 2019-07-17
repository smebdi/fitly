import React, { Component } from "react";
import { View } from "react-native";
import NavIcon from "../components/navIcon";
import Calendar from "../components/calendar";
// import CalendarItem from "../components/CalendarItem";
import Modal from "../components/modal";

const CalendarIcon = require("../../assets/icons/calendar_list/list.png");

class CalendarScreen extends Component {

  constructor(props) {
    console.log(props)
    super(props);
  }

  state = { 
    modalOpen: false, 
    modalTitle: "", 
    selectedDate: null 
  };

  render() {
    return {
        headerTitle: "CALENDAR",
        headerTitleStyle: {
            fontFamily: "Menlo-bold",
            color: "#2d2d2d"
        },
        headerRight: (
            <NavIcon
                icon={CalendarIcon}
                width={22}
                height={14}
                onPress={() => this.props.navigation.navigate("")}
            />
        )
        };
  }   

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
