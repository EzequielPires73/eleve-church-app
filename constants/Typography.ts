import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const typography = StyleSheet.create({
    h1: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "600",
        color: '#fff',
    },
    h2: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "600",
        color: Colors.dark.text,
    },
    h3: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "600",
        color: Colors.dark.text,
    },
    h4: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "500",
        color: Colors.dark.text,
    },
    button: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "500",
        color: Colors.dark.background,
    },
    p: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "400",
        color: '#ddd',
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