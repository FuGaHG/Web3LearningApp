import { Stack } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const lessons = [
    { id : '1', title: 'Introdução ao HTML', topic: 'HTML', content: 'HTML é a base da web...' },
    { id : '2', title: 'Estilizando com CSS', topic: 'CSS', content: 'CSS controla o estilo...' },
];

export default function LessonsScreen() {
    return (
        <ThemedView style={StyleSheet.container}>
            <Stack.Screen options={{ title: 'Lições'}} />
            <ThemedText type="title">Lições Disponíveis</ThemedText>
            <FlatList
                data={lessons}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ThemedView style={styles.lessonItem}>
                        <ThemedText type="subtitle">{item.title}</ThemedText>
                        <ThemedText>{item.content}</ThemedText>
                    </ThemedView>
                )}
                style={styles.list}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    list: {
        marginTop: 10,
    },
    lessonItem: {
        padding: 15,
        marginVertical: 5,
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
    },
});