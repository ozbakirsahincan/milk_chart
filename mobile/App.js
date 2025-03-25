import { ExpoRoot } from 'expo-router';
import { useEffect } from 'react';
import { LogBox } from 'react-native';

// Ignore specific warnings
LogBox.ignoreLogs([
  'Warning: Failed prop type',
  'Sending `onAnimatedValueUpdate`',
]);

export default function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}
