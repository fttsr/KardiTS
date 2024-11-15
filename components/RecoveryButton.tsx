import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

interface RecoveryButtonProps {
    isActive: boolean;
    onPress: () => void;
  }

const RecoveryButton: React.FC<RecoveryButtonProps> = ({isActive, onPress}) => {

  


  return (
    <TouchableOpacity 
        style={[styles.button, isActive ? styles.activeButton : styles.inactiveButton]}
        onPress={onPress}
        >
        <Image style={styles.icon} source={require('../assets/images/icon_recovery.png')} />
        <Text style={styles.buttonText}>Восстановление</Text>
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
      top: '20%',
      borderRadius: 16,
      height: 104,
      width: 386,
  
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 30,
      left: 30,
      alignContent: 'center',
      fontFamily: 'Montserrat_400Regular',
    },
    activeButton: {
        backgroundColor: 'green',
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

  export default RecoveryButton;