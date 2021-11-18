import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default class Editor extends Component {
  handleFormat(format: string) {
    console.log(format);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => this.handleFormat("bold")}
            style={styles.btn}
          >
            <Text>B</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleFormat("italic")}
            style={styles.btn}
          >
            <Text>I</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.editor}>
          <Text>An Awesome Editor Comes Here!</Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  editor: {
    flexGrow: 1,
    borderWidth: 1,
  },
  container: {
    margin: 10,
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  buttons: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#5E8D48",
    padding: 5,
    margin: 3,
    minWidth: 70,
  },
});
