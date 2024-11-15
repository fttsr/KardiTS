import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function BtnBg() {

  return (
    <View style={styles.button}>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
      flex: 1,
      backgroundColor: '#1F2421',
      position: 'absolute',
      flexDirection: 'column',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      top: '19%',
      borderRadius: 16,
      height: 366,
      width: 404,
  
    },
  });
