import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './Pages/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}> 
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
