import React, { FC } from "react";
// import { useNavigation } from "@react-navigation/native";

//Components
import { Button, StyleSheet, Text, View } from "react-native";
import Content from "../components/Content";
import Header from "../components/Header";
import { DetailsScreenNavigationProp } from "../interfaces/Navigation";

interface Props {
  navigation: DetailsScreenNavigationProp;
}

const Home: FC<Props> = ({ navigation }) => {
  // const navigation = useNavigation<DetailsScreenNavigationProp>();
  return (
    <Content nameScreen="Pantalla de inicio">
      <View style={styles.content}>
        <Header />
        <Text>Home</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate("Details");
          }}
        />
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
