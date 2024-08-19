import { categoriesHome } from "@/constants/Home";
import { FlatList, StyleSheet, View } from "react-native";
import { CardCategoryHome } from "../card-home";

export function CategoriesHomeSection() {
    return (
        <View style={styles.container}>
            <FlatList
                data={categoriesHome}
                columnWrapperStyle={styles.row}
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
      padding: 16,
      paddingBottom: 0,
    },
    row: {
      justifyContent: 'space-between',
      gap: 8,
    },
  });