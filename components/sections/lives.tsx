import { typography } from "@/constants/Typography";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { Span } from "../span";
import { CardLive } from "../cards/card-live";
import { useQuery } from '@tanstack/react-query';
import { Colors } from "@/constants/Colors";
import { findLives } from "@/repositories/lives";

export function LivesSection({ title }) {
    const { data, error, isLoading } = useQuery({ queryKey: ['lives'], queryFn: findLives });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={typography.h2}>{title}</Text>
            </View>
            {isLoading ?
                <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    <ActivityIndicator
                        size="large"
                        color={Colors.dark.primary}
                    />
                </View> :
                data ? <FlatList
                    data={data}
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    contentContainerStyle={{ gap: 16 }}
                    renderItem={({ item, index }) => <CardLive {...item} subtitle={item.description} index={index} isStart={index == 0} isEnd={index == data.length - 1} />}
                    overScrollMode="never"
                    showsHorizontalScrollIndicator={false}
                />
                    :
                    <View style={styles.header}>
                        <Span text={'Nenhum resultado foi encontrado.'} />
                    </View>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 16,
        alignItems: "flex-start"
    },
    header: {
        paddingHorizontal: 16,
    },
})