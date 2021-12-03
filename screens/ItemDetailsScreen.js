import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemDetailsScreen = (props) => {
  return (
    <View style={styles.screens}>
      <Text>The Item Details Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    screens: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default ItemDetailsScreen;
