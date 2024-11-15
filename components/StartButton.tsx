import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function StartButton() {
  return (
    
    <TouchableOpacity style={styles.button}>
      
        <View style={styles.circle} />
        <Text style={styles.buttonText}>{'     '}НАЧАТЬ{'\n'}ТРЕНИРОВКУ</Text>
        
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#D4FF52',
    position: 'absolute',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    bottom: 337,
    borderRadius: 9999,
    height: 332,
    width: 332,

  },
  buttonText: {
    color: '#0F1511',
    fontSize: 32,
    bottom: -105,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'Montserrat_700Bold',
  },
  circle: {
    position: 'absolute',
    width: 328,
    height: 328,
    borderRadius: 3000,
    borderWidth: 20,
    borderColor: '#2C312D',
    top: 1,
    left: 1,
  }
  
});
