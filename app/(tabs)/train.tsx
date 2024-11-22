import { StyleSheet, Image, SafeAreaView, TouchableOpacity} from 'react-native';

import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import DeviceModal from '@/components/DeviceConnectionModal';
import useBLE from '@/components/useBLE';


export default function Train() {
  const {
    allDevices,
    connectedDevice,
    connectToDevice,
    color,
    requestPermissions,
    scanForPeripherals,
  } = useBLE();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [heartRate, setHeartRate] = useState<number | null>(null);

  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
    }
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  };

   // Функция обработки данных о сердечном ритме
   const onHeartRateUpdate = (value: string) => {
    // Предположим, что `value` приходит в виде строки байтового массива
    const heartRateValue = parseInt(value, 10); // преобразуем в число
    setHeartRate(heartRateValue);
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>ТРЕНИРОВКА{'\n'}ЖИРОСЖИГАЮЩАЯ</Text>
      <Text style={styles.Text}>нагрузка в сравнении{'\n'}с нормой 
        <Text style={styles.highlight}> - 61%</Text>
      </Text>
      
      <TouchableOpacity onPress={openModal} style={styles.ctaButton}>
        <Text style={styles.ctaButtonText}>Подключиться к кардиографу</Text>
      </TouchableOpacity>

      {connectedDevice && (
        <Text style={styles.heartRateText}>
          ЧСС: {heartRate !== null ? heartRate + ' ударов в минуту' : 'Нет данных'}
        </Text>
      )}

      <DeviceModal
          closeModal={hideModal}
          visible={isModalVisible}
          connectToPeripheral={connectToDevice}
          devices={allDevices}
        />

      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1511',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
  },
  titleText: {
    position: 'absolute',
    textAlign: 'center',
    color: '#D4FF52',
    fontSize: 32,
    fontFamily: 'MontserratBold',
    top: '10%',
  },
  Text: {
    position: 'absolute',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 26,
    fontFamily: 'Montserrat',
    top: '20%',
  },
  highlight: {
    position: 'absolute',
    textAlign: 'center',
    color: '#D4FF52',
    fontSize: 26,
    fontFamily: 'MontserratBold',
    top: '20%',
  },
  img: {
    top: '15%',
    width: 404,
    height: 536,
  },
  heartRateTitleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heartRateTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
    color: "black",
  },
  heartRateText: {
    fontSize: 25,
    marginTop: 15,
  },
  ctaButton: {
    backgroundColor: "#FF6060",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

// Made by Nikita Prosvirkin