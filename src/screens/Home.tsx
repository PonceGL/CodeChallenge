import React, { FC } from "react";
// import { useNavigation } from "@react-navigation/native";

// interfaces
import { DetailsScreenNavigationProp } from "../interfaces/Navigation";

//Components
import { Button, StyleSheet, useWindowDimensions, View } from "react-native";
import Content from "../components/Content";
import Header from "../components/Header";
import PointCounter from "../components/PointCounter";
import Moves from "../components/Moves";

interface Props {
  navigation: DetailsScreenNavigationProp;
}

const Home: FC<Props> = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  // const navigation = useNavigation<DetailsScreenNavigationProp>();
  return (
    <Content nameScreen="Pantalla de inicio">
      <View style={[styles.content, { height: height }]}>
        <Header />
        <PointCounter />
        <Moves />
        {/* <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate("Details");
          }}
        /> */}
      </View>
    </Content>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
    rowGap: 20,
  },
});
