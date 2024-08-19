import { Colors } from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { Avatar } from "./avatar";

export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={typography.h1}>Olá, Rodrigo Gonçalves 👋</Text>
                <Text style={typography.p}>Seja muito bem vindo ao <Text style={typography.emphasis}>Eleve Church!</Text></Text>
            </View>
            <Avatar src="https://img.freepik.com/fotos-gratis/homem-bonito-posando-e-sorrindo_23-2149396133.jpg" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight + 16,
        padding: 16,
    },
    content: {
        flex: 1,
        gap: 4,
    },
})