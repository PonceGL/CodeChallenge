import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Content from "../components/Content";
import { DetailsScreenNavigationProp } from "../interfaces/Navigation";

interface Props {
  navigation: DetailsScreenNavigationProp;
}

const Details: FC<Props> = ({ navigation }) => {
  return (
    <Content nameScreen="Pantalla de inicio">
      <View style={styles.content}>
        <Text>Details</Text>
        <Button
          title="Go to Home... again"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </Content>
  );
};

export default Details;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#3E54AC",
  },
});
