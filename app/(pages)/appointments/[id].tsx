import { typography } from "@/constants/Typography";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function AppointmentsView() {
    const local = useLocalSearchParams();
    
    return (
        <View>
            <Pressable  onPress={() => router.back()}><Text style={typography.h1}>{local.id}</Text></Pressable>
        </View>
    )
}