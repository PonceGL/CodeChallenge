import React from "react";

//Components
import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";
import { colors } from "../../utils/colors";
import Product from "../Product";

const ListMoves = () => {
  const { width, height } = useWindowDimensions();
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-wef",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aaw3tt97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571knoiose29d72",
      title: "Third Item",
    },
    {
      id: "bsdfwefrtd7acbea-c1b1-46c2-aed5-wef",
      title: "First Item",
    },
    {
      id: "3ac68afc-cdfgdhf605-48d3-a4f8-fbd91aaw3tt97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-47sdvsd1f-bd96-145571knoiose29d72",
      title: "Third Item",
    },
  ];
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Product />}
      keyExtractor={item => item.id}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.stylesForItems}
      // ListEmptyComponent={}
    />
  );
};

export default ListMoves;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 10,
    backgroundColor: colors.light,
    borderRadius: 10,
  },
  stylesForItems: {
    rowGap: 10,
  },
});
