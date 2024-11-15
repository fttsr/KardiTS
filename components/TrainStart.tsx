import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function TrainStart() {

  return (
    <Link href="/(tabs)/train" asChild>
      <TouchableOpacity style={styles.button}>
          <View style={styles.circle}/>
          <Text style={styles.timer}>НАЧАТЬ</Text>
      </TouchableOpacity>
    </Link>
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
      justifyContent: 'center',
      top: '91%',
      borderRadius: 16,
      height: 64,
      width: 386,
  
    },
    timer: {
        color: '#0F1511',
        fontSize: 32,
        alignContent: 'center',
        fontFamily: 'MontserratBold',
    },
    circle: {
        position: 'absolute',
        width: 384,
        height: 62,
        borderRadius: 16,
        borderWidth: 10,
        borderColor: '#2C312D',
        top: 1,
        left: 1,
      }
  });
