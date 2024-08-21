import { CardMinistry } from "@/components/cards/card-ministry";
import { Span } from "@/components/span";
import { Colors } from "@/constants/Colors";
import { findMinistries } from "@/repositories/ministries";
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

export default function Ministries() {
    const { data, error, isLoading } = useQuery({ queryKey: ['ministries'], queryFn: findMinistries });
    console.log(data);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator
                size="large"
                color={Colors.dark.primary}
            /> : data ?
                <FlatList
                    style={styles.list}
                    data={data}
                    contentContainerStyle={{ gap: 16 }}
                    ItemSeparatorComponent={() => <View />}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => <CardMinistry
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        subtitle={item.responsible?.name}
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