import { typography } from "@/constants/Typography";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Lives() {
    return (
        <View>
            <Link href={'/lives/bacon'} style={typography.h2}>Teste</Link>
        </View>
    )
}