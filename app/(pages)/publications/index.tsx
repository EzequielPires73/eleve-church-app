import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { useQuery } from '@tanstack/react-query';
import { findNotices } from "@/repositories/publications";
import { Span } from "@/components/span";
import { CardPublication } from "@/components/cards/card-publication";
import { Colors } from "@/constants/Colors";

export default function Publications() {
    const { data, error, isLoading } = useQuery({ queryKey: ['notices'], queryFn: findNotices });

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator
                size="large"
                color={Colors.dark.primary}
            /> : data ?
                <FlatList
                    style={styles.list}
                    data={data}
                    contentContainerStyle={{ gap: 32 }}
                    ItemSeparatorComponent={() => <View />}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => <CardPublication
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        subtitle={item.introduction}
                        thumbnail={item.image}
                        vertical={true}
                        isStart={index == 0}
                        isEnd={index == data.length - 1}
                    />}
                />
                : <Span text={'Nenhum resultado foi encontrado.'} />}
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