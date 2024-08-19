import { typography } from "@/constants/Typography";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Publications() {
    return (
        <View>
            <Link href={'/publications/bacon'} style={typography.h2}>Teste</Link>
        </View>
    )
}