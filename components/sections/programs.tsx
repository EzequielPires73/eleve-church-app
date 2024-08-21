import { typography } from "@/constants/Typography";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Span } from "../span";
import { CardProgram } from "../cards/card-program";

export function ProgramsSection({ title, isLoading, programs }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={typography.h2}>{title}</Text>
            </View>
            {
                programs.length == 0 ?
                    <View style={styles.header}>
                        <Span text={'Nenhum resultado foi encontrado.'} />
                    </View>
                    :
                    <FlatList 
                        data={programs}
                        bounces={false}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        contentContainerStyle={{gap: 16}}
                        renderItem={({item, index}) => <CardProgram {...item} index={index} isStart={index == 0} isEnd={index == programs.length - 1}/>}
                        overScrollMode="never"
                        showsHorizontalScrollIndicator={false}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 16,
        alignItems: "flex-start"
    },
    header: {
        paddingHorizontal: 16,
    },
})