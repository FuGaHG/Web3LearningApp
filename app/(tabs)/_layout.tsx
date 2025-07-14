import { Tabs } from 'expo-router';
import { TabBarBackground } from '@/components/ui/TabBarBackground';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarBackground: () => <TabBarBackground />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="lessons"
        options={{
          title: 'Lições',
          tabBarIcon: ({ color }) => <IconSymbol name="book" color={color} />,
        }}
      />
    </Tabs>
  );
}