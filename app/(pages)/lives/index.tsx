import { CardLive } from "@/components/cards/card-live";
import { Colors } from "@/constants/Colors";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { useQuery } from '@tanstack/react-query';
import { Span } from "@/components/span";
import { findLives } from "@/repositories/lives";

export default function Lives() {
    const { data, error, isLoading } = useQuery({ queryKey: ['lives'], queryFn: findLives });

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator
                size="large"
                color={Colors.dark.primary}
            /> : data ? <FlatList
                style={styles.list}
                data={data}
                contentContainerStyle={{ gap: 16 }}
                ItemSeparatorComponent={() => <View />}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => <CardLive
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    subtitle={item.description}
                    thumbnail={item.thumbnail}
                    vertical={true}
                    isStart={index == 0}
                    isEnd={index == data.length - 1}
                />}
            /> : <Span text={'Nenhum resultado foi encontrado.'} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 16,
    }
})