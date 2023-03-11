import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Content from "../components/Content";
import Header from "../components/Header";

const Home = () => {
  return (
    <Content nameScreen="Pantalla de inicio">
      <View style={styles.content}>
        <Header />
        <Text>Home</Text>
      </View>
    </Content>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#3E54AC",
  },
});
