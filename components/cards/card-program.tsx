import { Colors } from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export function CardProgram({title, isStart, isEnd}) {
    return (
        <View style={{...styles.container, marginLeft: isStart && 16, marginRight: isEnd && 16}}>
            <View style={styles.thumbnail}>
                <Text style={typography.h3}>25/06</Text>
            </View>
            <View style={styles.content}>
                <Text style={typography.h3}>{title}</Text>
                <Text style={typography.span}>Quinta-feria às 19:30</Text>
            </View>
        </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.dark.backgroundCard,
        overflow: 'hidden',
        height: 80,
        width: 80,
        borderRadius: 8,
    }
});