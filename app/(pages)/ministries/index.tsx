import { typography } from "@/constants/Typography";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Ministries() {
    return (
        <View>
            <Link href={'/ministries/bacon'} style={typography.h2}>Teste</Link>
        </View>
    )
}