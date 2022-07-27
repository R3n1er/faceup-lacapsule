import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

import { Button, Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/home.jpg")}
      style={styles.container}
    >
      <Input
        containerStyle={{ marginBottom: 25, width: "70%" }}
        inputStyle={{ marginLeft: 10 }}
        placeholder="Name"
        leftIcon={<Icon name="user" size={24} color="#009788" />}
      />

      <Button
        title="Aller vers la gallerie"
        type="solid"
        buttonStyle={{ backgroundColor: "#009788" }}
        onPress={() =>
          props.navigation.navigate("BottomNavigator", { screen: "Snap" })
        }
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
