import { View, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function TabBarBackground() {
  const backgroundColor = useThemeColor({}, 'background');
  return <View style={[styles.container, { backgroundColor }]} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});