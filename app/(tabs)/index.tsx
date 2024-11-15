import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import StartButton from '@/components/StartButton';
import PrevResButton from '@/components/PrevResButton';
import InstrButton from '@/components/InstrButton';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>HomeScreen</Text>
      <Text style={styles.titleText}>Привет, Яр!</Text>
      <StartButton />
      <PrevResButton />
      <InstrButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1511',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
  },
  titleText: {
    position: 'absolute',
    textAlign: 'center',
    color: '#FAFAFA',
    fontSize: 36,
    fontFamily: 'Montserrat_400Regular',
    top: '2%',    
  },
});

// Made by Nikita Prosvirkin