import { typography } from "@/constants/Typography";
import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function LivesView() {
    const local = useLocalSearchParams();
    
    return (
        <View>
            <Link href={'/lives'} style={typography.h2}>{local.id}</Link>
        </View>
    )
}