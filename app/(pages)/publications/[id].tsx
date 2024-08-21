import { typography } from "@/constants/Typography";
import { router, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useQuery } from '@tanstack/react-query';
import { findNoticeById } from "@/repositories/publications";
import { Colors } from "@/constants/Colors";
import { Span } from "@/components/span";

export default function PublicationsView() {
    const local = useLocalSearchParams();
    const { data, error, isLoading } = useQuery({ queryKey: ['notices', local.id], queryFn: async () => findNoticeById(+local.id) });

    if (isLoading) {
        return <ActivityIndicator
            size="large"
            color={Colors.dark.primary}
        />
    }

    if(!data || error) {
        <Span text={error}/>
    }

    return (
        <View style={styles.container}>
            <Text style={typography.h1}>{data.title}</Text>
            <Text style={typography.p}>{data.introduction}</Text>
            <Image src={data.image} style={{ ...styles.thumbnail }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 8,
    },
    thumbnail: {
        borderRadius: 8,
        height: 300,
        width: '100%',
        marginVertical: 16,
    }
})