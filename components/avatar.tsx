import { Image, StyleSheet, View } from "react-native";

export function Avatar({ src, onPress }: { src?: string, onPress?(): void }) {
    return (
        <View style={styles.container}>
            <Image src={src} style={styles.content} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: '#fff',
        overflow: 'hidden'
    },
    content: {
        width: 64,
        height: 64,
    }
})