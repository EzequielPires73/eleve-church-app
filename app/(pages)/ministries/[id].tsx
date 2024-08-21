import { typography } from "@/constants/Typography";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Span } from "@/components/span";
import { Colors } from "@/constants/Colors";
import { findMinistryById } from "@/repositories/ministries";

export default function MinistryView() {
    const local = useLocalSearchParams();
    const { data, error, isLoading } = useQuery({ queryKey: ['notices', local.id], queryFn: async () => findMinistryById(+local.id) });

    if (isLoading) {
        return <ActivityIndicator
            size="large"
            color={Colors.dark.primary}
        />
    }

    if (!data || error) {
        <Span text={error} />
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image src={data.image} style={{ ...styles.thumbnail }} />
                <Text style={typography.h1}>{data.name}</Text>
                <Text style={typography.p}>{data.description}</Text>
            </View>
        </ScrollView>
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