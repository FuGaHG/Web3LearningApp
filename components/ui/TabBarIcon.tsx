import { View, Text } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function TabBarIcon({ name, color }: { name: string; color: string }) {
  return (
    <View>
      <Text style={{ color, fontSize: 24 }}>{name === 'home' ? '🏠' : '📖'}</Text>
    </View>
  );
}