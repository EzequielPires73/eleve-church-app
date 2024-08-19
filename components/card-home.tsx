import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

export function CardCategoryHome({ title, Icon, path }) {
    return (
        <Link href={path} asChild>
            <Pressable style={styles.container}>
                {Icon}
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.backgroundCard,
        paddingHorizontal: 8,
        paddingVertical: 24,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        borderRadius: 8,
    },
    text: {
        fontSize: 12,
        color: '#fff'
    }
});