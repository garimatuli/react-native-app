import React, { Component } from "react";
import { Text, StyleSheet, FlatList } from "react-native";

class EventList extends Component {
  render() {
    return (
      <FlatList
        data={[{ name: "a" }, { name: "b" }]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    );
  }
}

export default EventList;

const styles = StyleSheet.create({
  item: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "red",
    margin: 2,
    padding: 4,
  },
});
