import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

interface MuscleButtonProps {
    isActive: boolean;
    onPress: () => void;
}

const MuscleButton: React.FC<MuscleButtonProps> = ({isActive, onPress}) => {

  return (
    <TouchableOpacity 
    style={[styles.button, isActive ? styles.activeButton : styles.inactiveButton]}
    onPress={onPress}
    >
        <Image style={styles.icon} source={require('../assets/images/icon_muscle.png')} />
        <Text style={styles.buttonText}>Набор мышечной {'\n'} массы</Text>
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
      top: '50%',
      borderRadius: 16,
      height: 104,
      width: 340,
  
    },
    buttonText: {
      color: '#FFFFFF',
      textAlign: 'left',
      fontSize: 26,
      left: 45,
      alignContent: 'center',
      fontFamily: 'Montserrat',
    },
    activeButton: {
        backgroundColor: '#759227',   
    },
    inactiveButton: {
        backgroundColor: '#2C312D'
    },
    icon: {
      width: 81,
      height: 81,
      left: 9,
      flex: 1,
      position: 'absolute',
      flexDirection: 'column',
      alignSelf: 'flex-start',
  
    }
  });

  export default MuscleButton;
