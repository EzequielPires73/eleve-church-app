import { Colors } from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "./avatar";

export function Header({ user }: { user?: { name } }) {
    return (
        <>
            {user ? <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={typography.h1}>Olá, {user.name} 👋</Text>
                    <Text style={typography.p}>Seja muito bem vindo ao <Text style={typography.emphasis}>Eleve Church!</Text></Text>
                </View>
                <Avatar src="https://img.freepik.com/fotos-gratis/homem-bonito-posando-e-sorrindo_23-2149396133.jpg" />
            </View> :
                <View style={styles.signinContainer}>
                    <View style={styles.signinContent}>
                        <Text style={typography.h1}>Olá 👋</Text>
                        <Text style={typography.h2}>Seja muito bem vindo ao <Text style={typography.emphasis}>Eleve Church!</Text></Text>
                        <Text style={{ ...typography.p, textAlign: 'center' }}>Acesse sua conta ou cadastre-se para acessar todas as nossas funcionalidades.</Text>
                    </View>
                    <TouchableOpacity style={styles.button}><Text style={typography.button}>Entrar</Text></TouchableOpacity>
                </View>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight + 32,
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        gap: 4,
    },
    signinContainer: {
        paddingTop: StatusBar.currentHeight + 32,
        padding: 24,
        gap: 24,
        backgroundColor: Colors.dark.backgroundBar,
        alignItems: 'center',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    signinContent: {
        gap: 4,
        alignItems: 'center',
    },
    button: {
        paddingHorizontal: 32,
        height: 48,
        backgroundColor: Colors.dark.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    }
})