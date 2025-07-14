import { View, Text } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function IconSymbol({ name, color }: { name: string; color: string }) {
  return (
    <View>
      <Text style={{ color }}>{name === 'home' ? '🏠' : '📖'}</Text>
    </View>
  );
}