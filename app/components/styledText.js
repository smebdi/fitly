import React from "react";
import { Text } from "react-native";

export const BodyText = props => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "Menlo",
          fontSize: 16,
          color: "#2d2d2d",
          lineHeight: 23
        },
        props.style
      ]}
    />
  );
};
export const Body2 = props => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "Menlo",
          fontSize: 22,
          color: "#2d2d2d"
        },
        props.style
      ]}
    />
  );
};
export const Body3 = props => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "Menlo",
          fontSize: 16,
          color: "#2d2d2d"
        },
        props.style
      ]}
    />
  );
};
export const HeaderText = props => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "Menlo",
          fontSize: 30,
          color: "#2d2d2d"
        },
        props.style
      ]}
    />
  );
};

export const H2 = props => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "Menlo-Bold",
          fontSize: 18,
          color: "#2d2d2d",
          textTransform: "uppercase",
          letterSpacing: 1.4
        },
        props.style
      ]}
    />
  );
};

export const H3 = props => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "Menlo-Bold",
          fontSize: 16,
          color: "#2d2d2d",
          textTransform: "uppercase",
          letterSpacing: 1.5
        },
        props.style
      ]}
    />
  );
};

export const H4 = props => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "Menlo",
          fontSize: 14,
          color: "#9f9f9f",
          textTransform: "uppercase"
        },
        props.style
      ]}
    />
  );
};
export const MonoText = props => {
  return <Text {...props} style={[props.style, { fontFamily: "Menlo" }]} />;
};
