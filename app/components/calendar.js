import React, { Component } from "react";
import { CalendarList } from "react-native-calendars";
import { SafeAreaView } from "react-navigation";

const CalendarTheme = {
  backgroundColor: "#fff",
  calendarBackground: "#fff",
  textSectionTitleColor: "#b6c1cd",
  selectedDayBackgroundColor: "red",
  selectedDayTextColor: "#ffffff",
  todayTextColor: "#00adf5",
  dayTextColor: "#2d4150",
  textDisabledColor: "#d9e1e8",
  dotColor: "blue",
  selectedDotColor: "#ffffff",
  arrowColor: "orange",
  monthTextColor: "#000",
  textDayFontFamily: "Menlo",
  textMonthFontFamily: "Menlo-Bold",
  textDayHeaderFontFamily: "Menlo-Bold",
  textMonthFontWeight: "bold",
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16
};

class Calendar extends Component {
  state = {
    calendarData: {}
  };
  componentDidMount() {
    this.parseCalendarData();
  }

  parseCalendarData() {
    const data = this.props.data;

    if (data) {
      const hsh = {};
      for (const [date, plants] of Object.entries(data)) {
        hsh[date] = { dots: plants };
      }
      this.setState({ calendarData: hsh });
    }
  }

  render() {
    return (
      <SafeAreaView>
        <CalendarList // Callback which gets executed when visible months change in scroll view. Default = undefined
          onDayPress={day => {
            this.props.onCalendarPress(day);
          }}
          pastScrollRange={1}
          futureScrollRange={3}
          scrollEnabled
          showScrollIndicator={false}
          markedDates={this.state.calendarData}
          markingType={"multi-dot"}
          theme={CalendarTheme}
        />
      </SafeAreaView>
    );
  }
}

export default Calendar;
