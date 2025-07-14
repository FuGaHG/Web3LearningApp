import { Stack } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const lessons = [
  {
    id: '1',
    title: 'Introdução ao HTML',
    topic: 'HTML',
    content: 'HTML (HyperText Markup Language) é a base da web. Estrutura páginas com elementos como <h1>, <p>, e <div>. Exemplo: <h1>Olá, Mundo!</h1> cria um título. Tags como <a> criam links, e <img> adiciona imagens.',
  },
  {
    id: '2',
    title: 'Estilizando com CSS',
    topic: 'CSS',
    content: 'CSS (Cascading Style Sheets) define o estilo visual de páginas web. Exemplo: `color: blue;` muda a cor do texto, e `margin: 10px;` ajusta o espaçamento. Use seletores como `.class` ou `#id` para estilizar elementos específicos.',
  },
];

export default function LessonsScreen() {
    return (
        <ThemedView style={styles.container}>
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