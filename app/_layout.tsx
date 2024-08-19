import { Colors } from "@/constants/Colors";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="about" options={{ title: 'Sobre', headerStyle: {backgroundColor: Colors.dark.backgroundBar}, animation: "fade_from_bottom" }} />
        <Stack.Screen name="(pages)/ministries" options={{ title: 'Ministérios', headerStyle: {backgroundColor: Colors.dark.backgroundBar}, animation: "fade_from_bottom" }} />
        <Stack.Screen name="(pages)/publications" options={{ title: 'Publicações', headerStyle: {backgroundColor: Colors.dark.backgroundBar}, animation: "fade_from_bottom" }} />
        <Stack.Screen name="(pages)/appointments" options={{ title: 'Agendamentos', headerStyle: {backgroundColor: Colors.dark.backgroundBar}, animation: "fade_from_bottom" }} />
        <Stack.Screen name="(pages)/lives" options={{ title: 'Lives', headerStyle: {backgroundColor: Colors.dark.backgroundBar}, animation: "fade_from_bottom" }} />
      </Stack>
    </ThemeProvider>
  );
}
