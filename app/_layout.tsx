import { Colors } from "@/constants/Colors";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useReactQueryDevTools } from '@dev-plugins/react-query';
import { useEffect } from "react";
import { useColorScheme } from "react-native";

const queryClient = new QueryClient({});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  useReactQueryDevTools(queryClient);
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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(pages)/about" options={{ title: 'Sobre', headerStyle: { backgroundColor: Colors.dark.backgroundBar }, animation: "fade_from_bottom" }} />
          <Stack.Screen name="(pages)/ministries" options={{ title: 'Ministérios', headerStyle: { backgroundColor: Colors.dark.backgroundBar }, animation: "fade_from_bottom" }} />
          <Stack.Screen name="(pages)/publications" options={{ title: 'Publicações', headerStyle: { backgroundColor: Colors.dark.backgroundBar }, animation: "fade_from_bottom" }} />
          <Stack.Screen name="(pages)/appointments" options={{ title: 'Agendamentos', headerStyle: { backgroundColor: Colors.dark.backgroundBar }, animation: "fade_from_bottom" }} />
          <Stack.Screen name="(pages)/lives" options={{ title: 'Lives', headerStyle: { backgroundColor: Colors.dark.backgroundBar }, animation: "fade_from_bottom" }} />
        </Stack>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
