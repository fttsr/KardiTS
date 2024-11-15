import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';


export default function Timer() {

  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Таймер:</Text>
        <Text style={styles.timer}>0:00</Text>
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
    timer: {
        color: '#D4FF52',
        fontSize: 26,
        alignContent: 'center',
        fontFamily: 'Montserrat_400Regular',
    }
  });
