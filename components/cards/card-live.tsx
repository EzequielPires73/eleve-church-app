import { typography } from "@/constants/Typography";
import { Link } from "expo-router";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export function CardLive({ thumbnail, id, title, subtitle, isStart, isEnd, vertical }) {
    return (
        <Link href={{
            pathname: '/(pages)/lives/[id]',
            params: {
                id: id,
            }
        }} asChild>
            <Pressable style={{
                ...styles.container,
                width: vertical ? '100%' : width * 0.7,
                marginTop: vertical && isStart ? 16 : 0,
                marginBottom: vertical && isEnd ? 16 : 0,
                marginLeft: !vertical && isStart ? 16 : 0,
                marginRight: !vertical && isEnd ? 16 : 0
            }}>
                <Image src={thumbnail} style={styles.thumbnail} />
                <View style={styles.content}>
                    <Text style={typography.h3} numberOfLines={2}>{title}</Text>
                    <Text style={typography.span} numberOfLines={1}>{subtitle}</Text>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.7,
        flexDirection: "row",
        gap: 8,
    },
    content: {
        justifyContent: 'center',
        flex: 1,
        gap: 4,
        paddingHorizontal: 8
    },
    thumbnail: {
        borderRadius: 8,
        height: 80,
        width: 80,
    }
});