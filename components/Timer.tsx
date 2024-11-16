import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

interface TimerButtonProps {
  isActive: boolean;
  onPress: () => void;
}

const Timer: React.FC<TimerButtonProps> = ({isActive, onPress}) => {

  return (
    <TouchableOpacity 
    style={[styles.button, isActive ? styles.activeButton : styles.inactiveButton]}
    onPress={onPress}
    >
        <Text style={styles.buttonText}>Таймер:</Text>
        <Text style={[styles.timer, isActive ? styles.activeButtonText : styles.inactiveButtonText]}>0:00</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      flex: 1,
      backgroundColor: '#2C312D',
      position: 'absolute',
      flexDirection: 'column',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      top: '78%',
      left: '3%',
      borderRadius: 16,
      height: 103,
      width: 189,
  
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 26,
      alignContent: 'center',
      fontFamily: 'Montserrat_400Regular',
    },
    activeButton: {
      backgroundColor: '#759227',   
    },
    inactiveButton: {
        backgroundColor: '#2C312D'
    },
    timer: {
        color: '#D4FF52',
        fontSize: 26,
        alignContent: 'center',
        fontFamily: 'Montserrat_400Regular',
    },
    activeButtonText: {
      color: '#FFFFFF',
    },
    inactiveButtonText: {
      color: '#D4FF52',
    },
  });

  export default Timer;