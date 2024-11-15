import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';


export default function InstrButton() {

  return (
    <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={require('../assets/images/icon_instr.png')} />
        <Text style={styles.buttonText}>Инструкция</Text>
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
      bottom: 20,
      borderRadius: 16,
      height: 99,
      width: 331,
  
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 26,
      left: 18,
      alignContent: 'center',
      fontFamily: 'Montserrat_400Regular',
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
