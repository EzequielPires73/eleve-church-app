import { CategoriesHomeSection } from "@/components/sections/categories-home";
import { EventsSection } from "@/components/sections/events";
import { PublicationsSection } from "@/components/sections/publications";
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CategoriesHomeSection />
      <EventsSection title={'Próximas programações'} isLoading={false} events={[]} />
      <PublicationsSection title={'Últimas publicações'} isLoading={false} publications={[]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
  row: {
    justifyContent: 'space-between',
    gap: 8,
  },
});
