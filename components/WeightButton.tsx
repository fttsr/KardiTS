import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';


export default function WeightButton() {

  return (
    <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={require('../assets/images/icon_weight.png')} />
        <Text style={styles.buttonText}>Похудение</Text>
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
      top: '35%',
      borderRadius: 16,
      height: 104,
      width: 386,
  
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 30,
      left: -10,
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
