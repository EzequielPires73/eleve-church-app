import { Colors } from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import { StyleSheet, Text, View } from "react-native";

export function Span({ text }) {
    return (
        <View style={styles.container}>
            <Text style={typography.span}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        width: 'auto',
        backgroundColor: Colors.dark.backgroundCard,
    },
})