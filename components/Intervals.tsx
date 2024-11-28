import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import useBLE from './useBLE';


const Intervals: React.FC = () => {

    const {heartRate} = useBLE();

  return (
    <View style={styles.button} >
        <Text style={styles.buttonText}>
            Интервалы ЭКГ: {heartRate !== null ? heartRate + ' интервалов в минуту' : 'Нет данных'}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
      flex: 1,
      backgroundColor: '#2C312D',
      position: 'absolute',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      top: 150,
      left: '3%',
      borderRadius: 16,
      height: 103,
      width: 165,
  
    },
    buttonText: {
      color: '#FFFFFF',
      textAlign: 'left',
      fontSize: 20,
      left: 0,
      alignContent: 'center',
      fontFamily: 'Montserrat',
    },
    heartRateText: {
        fontSize: 18,
        marginTop: 15,
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

  export default Intervals;
