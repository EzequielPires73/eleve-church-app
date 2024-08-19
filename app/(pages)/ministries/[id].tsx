import { typography } from "@/constants/Typography";
import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function MinistryView() {
    const local = useLocalSearchParams();
    
    return (
        <View>
            <Link href={'/ministries'} style={typography.h2}>{local.id}</Link>
        </View>
    )
}