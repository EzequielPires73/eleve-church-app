import { typography } from "@/constants/Typography";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={typography.h1}>Teste</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        padding: 16,
    }
})