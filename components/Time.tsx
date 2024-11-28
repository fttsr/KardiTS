import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';



const Time: React.FC = () => {

    const [seconds, setSeconds] = useState(0); // Состояние для секунд
    const [minutes, setMinutes] = useState(0); // Состояние для минут

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 59) {
                    setMinutes(prevMinutes => prevMinutes + 1);
                    return 0;   // Сбрасываем секунды и увеличиваем минуту на 1
                }
                return prevSeconds + 1;
            });
        }, 1000); // Обновляем каждую секунду

        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  return (
    <View style={styles.button} >
        <Text style={styles.buttonText}>Время:</Text>
        <Text style={styles.timer}>{formattedTime}</Text>
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
      right: '3%',
      borderRadius: 16,
      height: 133,
      width: 165,
  
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
    },
  });

  export default Time;