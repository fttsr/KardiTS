import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';

import { Text, View } from '@/components/Themed';
import StartButton from '@/components/StartButton';
import PrevResButton from '@/components/PrevResButton';
import InstrButton from '@/components/InstrButton';

export default function TabOneScreen() {
  return (
    <>
      <StatusBar hidden/>
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Привет, Яр!</Text>
      <StartButton />
      <PrevResButton />
      <InstrButton />
    </SafeAreaView>
    </>
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
    fontFamily: 'Montserrat',
    top: '10%',    
  },
});

// Made by Nikita Prosvirkin