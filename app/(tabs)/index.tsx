import { Stack, useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Pressable, StyleSheet } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return ( 
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: 'Web3 Learning App' }} />
      <ThemedText type="title">Web3 Learning App</ThemedText>
      <ThemedText type="subtitle">Aprenda HTML, CSS, JS e Web3</ThemedText>
      <Pressable
        style={styles.button}
        onPress={() => router.push('/(tabs)/lessons')}
      >
        <ThemedText style={styles.buttonText}>Começar</ThemedText>
      </Pressable>
    </ThemedView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});