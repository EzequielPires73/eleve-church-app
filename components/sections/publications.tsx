import { typography } from "@/constants/Typography";
import { StyleSheet, Text, View } from "react-native";
import { Span } from "../span";

export function PublicationsSection({ title, isLoading, publications }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={typography.h2}>{title}</Text>
            </View>
            {
                publications.length == 0 ?
                    <View style={styles.header}>
                        <Span text={'Nenhum resultado foi encontrado.'} />
                    </View>
                    :
                    <View />
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