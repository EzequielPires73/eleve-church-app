import { categoriesHome } from "@/constants/Home";
import { FlatList, StyleSheet, View } from "react-native";
import { CardCategoryHome } from "../cards/card-home";

export function CategoriesHomeSection() {
    return (
        <View style={styles.container}>
            <FlatList
                data={categoriesHome}
                columnWrapperStyle={styles.row}
                ItemSeparatorComponent={() => <View style={{height: 8}}/>}
                contentContainerStyle={{ gap: 8 }}
                renderItem={({ item }) => <CardCategoryHome {...item} key={item.id} />}
                keyExtractor={item => item.id}
                numColumns={3}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      gap: 8
    },
    row: {
      justifyContent: 'space-between',
      gap: 8,
    },
  });