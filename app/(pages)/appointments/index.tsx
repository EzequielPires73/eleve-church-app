import { typography } from "@/constants/Typography";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Appointments() {
    return (
        <View>
            <Link href={'/appointments/bacon'} style={typography.h2}>Teste</Link>
        </View>
    )
}