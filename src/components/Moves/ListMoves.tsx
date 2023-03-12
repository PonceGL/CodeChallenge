import React, { FC } from "react";
import { colors } from "../../utils/colors";
import { Product } from "../../interfaces/Products";

//Components
import { FlatList, StyleSheet } from "react-native";
import ProductComponent from "../Product";
import EmptyComponent from "../EmptyComponent";

interface Props {
  data: Product[] | null;
}

const ListMoves: FC<Props> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ProductComponent {...item} />}
      keyExtractor={item => item.id}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.stylesForItems}
      ListEmptyComponent={<EmptyComponent />}
    />
  );
};

export default ListMoves;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: colors.light,
    borderRadius: 10,
  },
  stylesForItems: {
    rowGap: 10,
  },
});
