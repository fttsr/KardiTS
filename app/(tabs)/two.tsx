import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import RecoveryButton from '@/components/RecoveryButton';
import WeightButton from '@/components/WeightButton';
import MuscleButton from '@/components/MuscleButton';
import BtnBg from '@/components/BtnBg';
import Timer from '@/components/Timer';
import TrainFree from '@/components/TrainFree';
import TrainStart from '@/components/TrainStart';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Выбор{'\n'}активности:</Text>
      <BtnBg />
      <RecoveryButton />
      <WeightButton />
      <MuscleButton />

      <Text style={styles.bottomText}>Задайте время{'\n'}тренировки:</Text>
      <Timer />
      <TrainFree />
      <TrainStart />

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
    textAlign: 'left',
    color: '#FAFAFA',
    fontSize: 36,
    fontFamily: 'Montserrat_400Regular',
    top: '6%',
    left: 15,    
  },
  bottomText: {
    position: 'absolute',
    textAlign: 'left',
    color: '#FAFAFA',
    fontSize: 32,
    fontFamily: 'Montserrat_400Regular',
    top: '67%',
    left: 15,    
  }
});

// Made by Nikita Prosvirkin