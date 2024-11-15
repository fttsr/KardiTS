import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';


export default function TrainFree() {

  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.timer}>Свободная</Text>
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
      right: '3%',
      borderRadius: 16,
      height: 103,
      width: 189,
  
    },
    timer: {
        color: '#D4FF52',
        fontSize: 26,
        alignContent: 'center',
        fontFamily: 'Montserrat_400Regular',
    }
  });
