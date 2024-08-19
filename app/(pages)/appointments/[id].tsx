import { typography } from "@/constants/Typography";
import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function AppointmentsView() {
    const local = useLocalSearchParams();
    
    return (
        <View>
            <Link href={'/appointments'} style={typography.h2}>{local.id}</Link>
        </View>
    )
}