import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

interface FreeButtonProps {
  isActive: boolean;
  onPress: () => void;
}

 const TrainFree: React.FC<FreeButtonProps> = ({isActive, onPress}) => {

  return (
    <TouchableOpacity 
      style={[styles.button, isActive ? styles.activeButton : styles.inactiveButton]}
      onPress={onPress}
      >
        <Text style={[styles.timer, isActive ? styles.activeButtonText : styles.inactiveButtonText]}>Свободная</Text>
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
      top: '76%',
      right: '3%',
      borderRadius: 16,
      height: 103,
      width: 165,
  
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
        fontFamily: 'Montserrat',
    },
    activeButtonText: {
      color: '#FFFFFF',
    },
    inactiveButtonText: {
      color: '#D4FF52',
    },
  });

  export default TrainFree;