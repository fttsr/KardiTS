import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text, View } from '@/components/Themed';
import RecoveryButton from '@/components/RecoveryButton';
import WeightButton from '@/components/WeightButton';
import MuscleButton from '@/components/MuscleButton';
import BtnBg from '@/components/BtnBg';
import Timer from '@/components/Timer';
import TrainFree from '@/components/TrainFree';
import TrainStart from '@/components/TrainStart';

export default function TabTwoScreen() {


  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleRecoveryPress = () => {
    setActiveButton('recovery');
  }

  const handleWeightPress = () => {
    setActiveButton('weight');
  }
  
  const handleMusclePress = () => {
    setActiveButton('muscle');
  }


  const [activeButtonTimer, setActiveButtonTimer] = useState<string | null>(null);

  const handleFreePress = () => {
    setActiveButtonTimer('free');
  }

  const handleTimerPress = () => {
    setActiveButtonTimer('timer');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Выбор{'\n'}активности:</Text>
      <BtnBg />
      <RecoveryButton 
        isActive={activeButton === 'recovery'} 
        onPress={handleRecoveryPress} 
      />
      <WeightButton 
        isActive={activeButton === 'weight'}
        onPress={handleWeightPress}
      />
      <MuscleButton 
        isActive={activeButton === 'muscle'}
        onPress={handleMusclePress}
      />

      <Text style={styles.bottomText}>Задайте время{'\n'}тренировки:</Text>
      <Timer
        isActive={activeButtonTimer === 'timer'}
        onPress={handleTimerPress} 
      />
      <TrainFree 
        isActive={activeButtonTimer === 'free'}
        onPress={handleFreePress}
      />
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
    fontFamily: 'MontserratBold',
    top: '6%',
    left: 15,    
  },
  bottomText: {
    position: 'absolute',
    textAlign: 'left',
    color: '#FAFAFA',
    fontSize: 32,
    fontFamily: 'MontserratBold',
    top: '67%',
    left: 15,    
  }
});

// Made by Nikita Prosvirkin