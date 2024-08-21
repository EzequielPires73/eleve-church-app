import { typography } from "@/constants/Typography";
import { Link } from "expo-router";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export function CardPublication({ thumbnail, id, title, subtitle, vertical, isStart, isEnd }) {
    return (
        <Link href={{
            pathname: '/(pages)/publications/[id]',
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
                <Image src={thumbnail} style={{...styles.thumbnail, height: vertical ? width * 0.65 : 200,}} />
                <View style={styles.content}>
                    <Text style={typography.h3} numberOfLines={2}>{title}</Text>
                    <Text style={typography.span} numberOfLines={2}>{subtitle}</Text>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
    },
    content: {
        gap: 4,
        padding: 8
    },
    thumbnail: {
        borderRadius: 8,
        height: 200,
        width: '100%'
    }
});