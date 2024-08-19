import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const typography = StyleSheet.create({
    h1: {
        fontSize: 18,
        fontWeight: "600",
        color: '#fff',
    },
    h2: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.dark.text,
    },
    h3: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.dark.text,
    },
    h4: {
        fontSize: 14,
        fontWeight: "500",
        color: Colors.dark.text,
    },
    p: {
        fontSize: 14,
        fontWeight: "400",
        color: Colors.dark.text,
    },
    span: {
        fontSize: 12,
        fontWeight: "300",
        color: Colors.dark.text,
    },
    emphasis: {
        fontWeight: "600",
        color: Colors.dark.primary,
    },
})