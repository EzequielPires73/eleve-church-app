import { typography } from "@/constants/Typography";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { Span } from "../span";
import { useQuery } from '@tanstack/react-query';
import { CardPublication } from "../cards/card-publication";
import { findNotices } from "@/repositories/publications";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function PublicationsSection({ title }) {
    const { data, error, isLoading } = useQuery({ queryKey: ['notices'], queryFn: findNotices });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={typography.h2}>{title}</Text>
            </View>
            {isLoading ?
                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
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
                    renderItem={({ item, index }) => <CardPublication {...item} subtitle={item.introduction} thumbnail={item.image} index={index} isStart={index == 0} isEnd={index == data.length - 1} />}
                    overScrollMode="never"
                    showsHorizontalScrollIndicator={false}
                /> :
                    <View style={styles.header}>
                        <Span text={'Nenhum resultado foi encontrado.'} />
                    </View>

            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 16,
        alignItems: "flex-start"
    },
    header: {
        paddingHorizontal: 16,
    }
})