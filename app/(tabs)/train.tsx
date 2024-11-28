import { StyleSheet, Image, SafeAreaView, TouchableOpacity} from 'react-native';

import { Text, View } from '@/components/Themed';
import React, { useEffect, useState } from 'react';
import DeviceModal from '@/components/DeviceConnectionModal';
import useBLE from '@/components/useBLE';
import Time from '@/components/Time';


export default function Train() {
  const {
    allDevices,
    connectedDevice,
    connectToDevice,
    color,
    requestPermissions,
    scanForPeripherals,
    heartRate
  } = useBLE();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

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


  const [maxHeartRate, setMaxHeartRate] = useState<number>(0);
  
  useEffect(() => {
    if (heartRate !== null && heartRate > maxHeartRate) {
      setMaxHeartRate(heartRate);
    }
  }, [heartRate]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>ТРЕНИРОВКА{'\n'}ЖИРОСЖИГАЮЩАЯ</Text>
      <Text style={styles.Text}>нагрузка в сравнении{'\n'}с нормой 
        <Text style={styles.highlight}> - 60-80%</Text>
      </Text>
      
      <TouchableOpacity onPress={openModal} style={styles.ctaButton}>
        <Text style={styles.ctaButtonText}>Подключиться к кардиографу</Text>
      </TouchableOpacity>


      {/* {connectedDevice && ( */}
          <View>
            <View style={styles.button} >
            <Image style={styles.icon} source={require('../../assets/images/kgrm.png')} />
              <Text style={styles.buttonText}>
                  Интервалы ЭКГ:
                  <Text style={maxHeartRate > 60 && maxHeartRate < 80 ? styles.highlightGreen : styles.highlightRed}>
                    {maxHeartRate !== null
                    ? ' ' + maxHeartRate + ' интервалов в минуту' 
                    : 'Нет данных'}
                  </Text>
              </Text>
          </View>
            <Time />
          </View>
      
      

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
  button: {
    flex: 1,
    backgroundColor: '#2C312D',
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: 150,
    left: 11.5,
    borderRadius: 16,
    height: 133,
    width: 165,
  },
  icon: {
    width: 334,
    height: 220,
    left: -175,
    top: -300,
    borderRadius: 16,
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'left',
    fontSize: 18,
    left: 0,
    alignContent: 'center',
    fontFamily: 'MontserratBold',
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
  ctaButton: {
    backgroundColor: "#FF6060",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    top: '44%',
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 4,
    width: 300,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  highlightGreen: {
    color: '#D4FF52',
  },
  highlightRed: {
    color: 'red',
  }
});

// Made by Nikita Prosvirkin