import React, { Component, PropTypes } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import logoImg from "../../../assets/images/logo.png";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>MCQ Online</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 80,
    height: 80
  },
  text: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "transparent",
    marginTop: 20
  }
});
