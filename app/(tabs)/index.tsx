import { Header } from "@/components/header";
import { CategoriesHomeSection } from "@/components/sections/categories-home";
import { ProgramsSection } from "@/components/sections/programs";
import { LivesSection } from "@/components/sections/lives";
import { PublicationsSection } from "@/components/sections/publications";
import { programs, publications } from "@/constants/data";
import { FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";

const sections = [
  { id: 'header', component: <Header user={{name: 'Ezequiel Pires'}} /> },
  { id: 'categories', component: <CategoriesHomeSection /> },
  { id: 'events', component: <ProgramsSection title={'Próximas programações'} isLoading={false} programs={programs} /> },
  { id: 'lives', component: <LivesSection title={'Últimas lives'} /> },
  { id: 'publications', component: <PublicationsSection title={'Últimas publicações'} isLoading={false} publications={publications} /> },
];

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor={Colors.dark.backgroundBar} />
      <FlatList
        data={sections}
        renderItem={({ item }) => <View>{item.component}</View>}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
    paddingBottom: 32,
  },
  row: {
    justifyContent: 'space-between',
    gap: 8,
  },
});
