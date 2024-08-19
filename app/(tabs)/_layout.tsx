import { Header } from "@/components/header";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    const tabs = [
        { id: 1, name: 'index', title: 'Início', icon: 'home-outline', iconActive: 'home' },
        { id: 2, name: 'radio', title: 'Rádio', icon: 'radio-outline', iconActive: 'radio' },
        { id: 3, name: 'prayers', title: 'Orações', icon: 'heart-half-outline', iconActive: 'heart-half' },
        { id: 4, name: 'bible', title: 'Bíblia', icon: 'book-outline', iconActive: 'book' },
        { id: 5, name: 'profile', title: 'Perfil', icon: 'person-outline', iconActive: 'person' },
    ]

    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                backgroundColor: Colors.dark.backgroundBar,
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 16,
                height: 80,
                borderTopWidth: 0,
            },
            tabBarActiveTintColor: Colors.dark.primary,
            tabBarInactiveTintColor: Colors.dark.tint
        }}>
            {tabs.map(tab => <Tabs.Screen
                key={tab.id}
                name={tab.name}
                options={{
                    header: () => <Header />,
                    title: tab.title,
                    tabBarIcon: ({ size, color, focused }) => (
                        <Ionicons
                            name={focused ? tab.iconActive as 'home' : tab.icon as 'home'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />)}
        </Tabs>
    )
}
